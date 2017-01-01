﻿(function(){
  var app = angular.module('myApp',[]);

  app.service('localStorageService',[function(){
    var vm = this;

    vm.getProperty = function(propertyName){
      var result=[];
      if(propertyName =="menuList"){
        //讀取JSON
        result = [{"name":"大魷魚","price":100,"id":1,"class":1},{"name":"雞腿","price":70,"id":2,"class":1},{"name":"香雞排","price":60,"id":3,"class":1},{"name":"牛肉蔥捲","price":45,"id":4,"class":1},{"name":"豬肉蔥捲","price":40,"id":5,"class":1},{"name":"牛條肉","price":40,"id":6,"class":1},{"name":"雞腿捲","price":35,"id":7,"class":2},{"name":"小腿排","price":35,"id":8,"class":2},{"name":"雞肉串","price":35,"id":9,"class":2},{"name":"翅膀","price":35,"id":10,"class":2},{"name":"肥腸","price":35,"id":11,"class":2},{"name":"玉米","price":35,"id":12,"class":2},{"name":"一口香腸","price":30,"id":13,"class":3},{"name":"豬五花","price":30,"id":14,"class":3},{"name":"尾椎","price":30,"id":15,"class":3},{"name":"雞心","price":30,"id":16,"class":3},{"name":"豬肉蔥串","price":25,"id":17,"class":4},{"name":"雞腱","price":25,"id":18,"class":4},{"name":"米血","price":25,"id":19,"class":4},{"name":"小肉豆","price":25,"id":20,"class":4},{"name":"銀絲卷","price":25,"id":21,"class":4},{"name":"杏鮑菇","price":25,"id":22,"class":4},{"name":"青椒","price":25,"id":23,"class":4},{"name":"麻糬","price":25,"id":24,"class":4},{"name":"香菇","price":25,"id":25,"class":4},{"name":"豆皮","price":25,"id":26,"class":4},{"name":"黃甜","price":25,"id":27,"class":4},{"name":"牛肉串","price":20,"id":28,"class":5},{"name":"羊肉串","price":20,"id":29,"class":5},{"name":"豬肉串","price":20,"id":30,"class":5},{"name":"鱈魚丸","price":20,"id":31,"class":5},{"name":"花枝丸","price":20,"id":32,"class":5},{"name":"四季豆","price":20,"id":33,"class":5},{"name":"百頁豆腐","price":20,"id":34,"class":5},{"name":"米腸","price":20,"id":35,"class":5},{"name":"雞皮","price":20,"id":36,"class":5},{"name":"白甜","price":20,"id":37,"class":5},{"name":"洋蔥","price":20,"id":38,"class":5},{"name":"豆干","price":20,"id":39,"class":5},{"name":"雞脖子","price":10,"id":40,"class":6},{"name":"黑輪","price":10,"id":41,"class":6},{"name":"熱狗","price":10,"id":42,"class":6}];
      }else{
        //讀取紀錄
        result = localStorage.getItem(propertyName);
      }
      result = result || "[]";
      return angular.fromJson(result);
    };

    vm.setProperty = function(propertyName,value){
      localStorage.setItem(propertyName,angular.toJson(value));
    };
  }]);

  app.controller('MainController',['localStorageService','$filter','$rootScope',function(localStorageService,$filter,$rootScope){
    var vm = this;
    $rootScope.data={};
    $rootScope.data.menuList=localStorageService.getProperty("menuList")||[];
    $rootScope.data.checkList = localStorageService.getProperty("checkList")||[];
    $rootScope.data.orderList={data:[]};
    $rootScope.data.checkId = localStorageService.getProperty("checkId")||0;
    $rootScope.swal=swal;

    vm.isOrder = true;
    vm.isCheck = false;
    vm.isOption = false;

    vm.setTab = function(index){
      switch (index){
        case 1:
          vm.isOrder = true;
          vm.isCheck = false;
          vm.isOption = false;
          break;
        case 2:
          vm.isOrder = false;
          vm.isCheck = true;
          vm.isOption = false;
          break;
        case 3:
          vm.isOrder = false;
          vm.isCheck = false;
          vm.isOption = true;
          break;
      }
    };
    $rootScope.data.setTab=vm.setTab;
    vm.discount = 0.9;
    vm.totalCount=function(list){
      var total = 0;
      angular.forEach(list,function(value,key){
        total+=value.price*value.count;
      });
      return total;
    };
  }]);

  app.controller('OrderController',['localStorageService','$filter','$rootScope','$timeout',function(localStorageService,$filter,$rootScope,$timeout){
    var vm = this;
    vm.menuList = $rootScope.data.menuList;
    vm.menuList = $filter('orderBy')(vm.menuList , 'id');
    vm.checkList = $rootScope.data.checkList;
    //vm.checkList = $filter('orderBy')(vm.checkList , 'id');

    vm.orderList=$rootScope.data.orderList;

    vm.plus=function(item){
      var copy = angular.copy(item);
      var target = {};
      angular.forEach(vm.orderList.data,function(value,key){
        if(value.id==item.id){
          target=value;
        }
      });
      if(target.id>0){
        target.count++;
      }
      else{
        copy.count=1;
        vm.orderList.data.push(copy);
      }
    };

    vm.minus=function(item){
      var copy = angular.copy(item);
      var target = {};
      angular.forEach(vm.orderList.data,function(value,key){
        if(value.id==item.id){
          target=value;
        }
      });
      if(target.id>0){
        target.count--;
        if(target.count==0){
          vm.orderList.data.splice(vm.orderList.data.indexOf(target),1);
        }
      }
    };

    vm.count=function(item){
      var size =0
      angular.forEach(vm.orderList.data,function(value,key){        
        if(value.id==item.id){
          size=value.count;
        }
      });
      return size;
    };



    vm.submit=function(){
      $rootScope.swal({
        title: "已輸入完成?",
        text: "菜單將會轉到結帳區",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "點菜完成",
        closeOnConfirm: false
      },function(){
        vm.submitSuccess();
        swal("完成!", "菜單已經轉到結帳區", "success");        
      });
    };

    vm.submitSuccess=function(){
      $timeout(function(){
        var copy = angular.copy(vm.orderList);

        if(copy.id){
          angular.forEach(vm.checkList,function(value,key){
            if(value.id===copy.id)
              vm.orderList[key] = copy;
          });
        }else{
          var id =$rootScope.data.checkId;
          if(vm.checkList.length){          
            id = vm.checkList[vm.checkList.length-1]["id"];  
          }
          id++;
          if(id>50){
            id=1;
          }
          copy.id=id;
          vm.checkList.push(copy);
          $rootScope.data.checkId=id;          
          localStorageService.setProperty("checkId",$rootScope.data.checkId);
          localStorageService.setProperty("checkList",vm.checkList);
        }
        vm.orderList={data:[]};
        $rootScope.data.orderList=vm.orderList;
      },1);
    };

    vm.clear=function(){
      vm.orderList={data:[]};
      $rootScope.data.orderList=vm.orderList;
    };
  }]);


  app.controller('CheckController',['localStorageService','$filter','$rootScope','$timeout',function(localStorageService,$filter,$rootScope,$timeout){
    var vm = this;
    vm.orderList=$rootScope.data.orderList;
    vm.checkList = $rootScope.data.checkList;    

    vm.edit=function(list){
      $rootScope.data.orderList=list;
      $rootScope.data.setTab(1);
    };

    vm.submit=function(item){
      $rootScope.swal({
        title: "已交貨?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "完成",
        closeOnConfirm: false
      },function(){
        vm.submitSuccess(item);
        swal("完成!", "已交貨：結帳單 "+item.id+"", "success");        
      });
    }

    vm.submitSuccess=function(item){
      $timeout(function(){
        angular.forEach(vm.checkList,function(value,key){
          if(value.id==item.id){
            vm.checkList.splice(key,1);
          }
        });
        localStorageService.setProperty("checkList",vm.checkList);
      },1);
    };

    vm.reIdSuccess=function(){
      $rootScope.swal({
        title: "單號強制重算?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "確定",
        closeOnConfirm: false
      },function(){
        vm.reIdSuccess();
        swal("完成!", "單號已從頭開始計算", "success");        
      });
    };

    vm.reIdSuccess=function(){
      $timeout(function(){
        $rootScope.data.checkId=0;          
        localStorageService.setProperty("checkId",$rootScope.data.checkId);
      },1);
    };
  }]);

  app.controller('OptionController',['localStorageService','$filter','$rootScope',function(localStorageService,$filter,$rootScope){
    var vm = this;

    vm.isList = true;
    vm.menuList = $rootScope.data.menuList;
    vm.menuList = $filter('orderBy')(vm.menuList , 'id');
    vm.item ={};

    vm.submit=function(){
      var copy = angular.copy(vm.item);

      if(vm.item.id){
        angular.forEach(vm.menuList,function(value,key){
          if(value.id===copy.id)
            vm.menuList[key] = copy;
        });
      }else{
        var id =1;
        if(vm.menuList.length){          
          id = vm.menuList[vm.menuList.length-1]["id"]*1+1;  
        }
        copy.id=id;
        vm.menuList.push(copy);
      }
      vm.isList = true;
      vm.item={};
      localStorageService.setProperty("menuList",vm.menuList);
    };
  }]);
})();