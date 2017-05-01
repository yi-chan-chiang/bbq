(function () {
  var app = angular.module('myApp', []);

  app.service('localStorageService', [function () {
    var vm = this;

    vm.getProperty = function (propertyName) {
      var result = [];
      if (propertyName == "menuList") {
        //讀取JSON
        result = [{ "name": "大魷魚", "vnname": "Yóuyú", "price": 100, "id": 1, "class": 1 }, { "name": "雞腿", "vnname": "Jītuǐ", "price": 70, "id": 2, "class": 1 }, { "name": "香雞排", "vnname": "Jī pái", "price": 60, "id": 3, "class": 1 }, { "name": "牛肉蔥捲", "vnname": "Niúròu cōng juǎn", "price": 45, "id": 4, "class": 1 }, { "name": "豬肉蔥捲", "vnname": "Zhūròu cōng juǎn", "price": 40, "id": 5, "class": 1 }, { "name": "牛條肉", "vnname": "Niú tiáo ròu", "price": 40, "id": 6, "class": 1 }, { "name": "雞腿捲", "vnname": "Jītuǐ juǎn", "price": 35, "id": 7, "class": 2 }, { "name": "小腿排", "vnname": "Xiǎotuǐ pái", "price": 35, "id": 8, "class": 2 }, { "name": "雞肉串", "vnname": "Jīròu chuàn", "price": 35, "id": 9, "class": 2 }, { "name": "翅膀", "vnname": "Jīchì", "price": 30, "id": 10, "class": 2 }, { "name": "肥腸", "vnname": "Féichán", "price": 35, "id": 11, "class": 2 }, { "name": "玉米", "vnname": "Yùmǐ", "price": 35, "id": 12, "class": 2 }, { "name": "一口香腸", "vnname": "Yīkǒu xiāngcháng", "price": 30, "id": 13, "class": 3 }, { "name": "豬五花", "vnname": "Zhū wǔ huā", "price": 30, "id": 14, "class": 3 }, { "name": "尾椎", "vnname": "Qīlǐxiāng", "price": 30, "id": 15, "class": 3 }, { "name": "雞心", "vnname": "Jīxīn", "price": 30, "id": 16, "class": 3 }, { "name": "豬肉蔥串", "vnname": "Zhūròu cōng chuàn", "price": 25, "id": 17, "class": 4 }, { "name": "雞腱", "vnname": "Jī jiàn", "price": 25, "id": 18, "class": 4 }, { "name": "米血", "vnname": "Mǐ xuè", "price": 25, "id": 19, "class": 4 }, { "name": "小肉豆", "vnname": "Xiǎo ròu dòu", "price": 20, "id": 20, "class": 4 }, { "name": "銀絲卷", "vnname": "Yín sī juǎn", "price": 25, "id": 21, "class": 4 }, { "name": "杏鮑菇", "vnname": "Xìng bào gu", "price": 25, "id": 22, "class": 4 }, { "name": "青椒", "vnname": "Qīngjiāo", "price": 25, "id": 23, "class": 4 }, { "name": "麻糬", "vnname": "mochi", "price": 25, "id": 24, "class": 4 }, { "name": "香菇", "vnname": "Xiānggū", "price": 25, "id": 25, "class": 4 }, { "name": "豆皮", "vnname": "Dòu pí", "price": 25, "id": 26, "class": 4 }, { "name": "黃甜", "vnname": "Huáng tián", "price": 25, "id": 27, "class": 4 }, { "name": "牛肉串", "vnname": "Niúròu chuàn", "price": 20, "id": 28, "class": 5 }, { "name": "羊肉串", "vnname": "Yángròu chuàn", "price": 20, "id": 29, "class": 5 }, { "name": "豬肉串", "vnname": "Zhūròu chuàn", "price": 20, "id": 30, "class": 5 }, { "name": "鱈魚丸", "vnname": "Xuěyú wán", "price": 20, "id": 31, "class": 5 }, { "name": "花枝丸", "vnname": "Huāzhī wán", "price": 20, "id": 32, "class": 5 }, { "name": "四季豆", "vnname": "Sìjì dòu", "price": 20, "id": 33, "class": 5 }, { "name": "百頁豆腐", "vnname": "Bǎi yè dòufu", "price": 20, "id": 34, "class": 5 }, { "name": "米腸", "vnname": "Mǐ cháng", "price": 20, "id": 35, "class": 5 }, { "name": "雞皮", "vnname": "Jīpí", "price": 20, "id": 36, "class": 5 }, { "name": "白甜", "vnname": "Bái tián", "price": 20, "id": 37, "class": 5 }, { "name": "洋蔥", "vnname": "Yángcōng", "price": 20, "id": 38, "class": 5 }, { "name": "豆干", "vnname": "Dòu gān", "price": 20, "id": 39, "class": 5 }, { "name": "雞脖子", "vnname": "Jī bózi", "price": 10, "id": 40, "class": 6 }, { "name": "黑輪", "vnname": "Hēi lún", "price": 10, "id": 41, "class": 6 }, { "name": "熱狗", "vnname": "Règǒu", "price": 10, "id": 42, "class": 6 }];
      } else {
        //讀取紀錄
        result = localStorage.getItem(propertyName);
      }
      result = result || "[]";
      return angular.fromJson(result);
    };

    vm.setProperty = function (propertyName, value) {
      localStorage.setItem(propertyName, angular.toJson(value));
    };
  }]);

  app.service('languageService', [function () {
    var vm = this;

    vm.getLanguageName = function (lan) {
      var codeString = '';
      switch (lan) {
        case 'vn':
          codeString = 'vnname'
          break;
        case 'tw':
          codeString = 'name'
          break;
        default:
          codeString = 'name';
          break;
      }
      return codeString;
    };
  }]);

  app.controller('MainController', ['localStorageService', '$filter', '$rootScope', 'languageService', function (localStorageService, $filter, $rootScope, languageService) {
    var vm = this;
    $rootScope.data = {};
    $rootScope.data.menuList = localStorageService.getProperty("menuList") || [];
    $rootScope.data.checkList = localStorageService.getProperty("checkList") || [];
    $rootScope.data.orderList = { data: [], spicy: 0, pay: 1, phone: 0 };
    $rootScope.data.checkId = localStorageService.getProperty("checkId") || 0;
    $rootScope.data.language = localStorageService.getProperty("language") || 'tw';
    $rootScope.swal = swal;

    vm.isOrder = true;
    vm.isCheck = false;
    vm.isOption = false;

    vm.setTab = function (index) {
      switch (index) {
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
    $rootScope.data.setTab = vm.setTab;
    vm.discount = 0.9;
    vm.totalCount = function (list) {
      var total = 0;
      angular.forEach(list, function (value, key) {
        total += value.price * value.count;
      });
      return total;
    };

    vm.numberCount = function (list) {
      var total = 0;
      angular.forEach(list, function (value, key) {
        total += value.count;
      });
      return total;
    };

    vm.changeLanguage = function (lan) {
      localStorageService.setProperty("language", lan);
      $rootScope.data.language = localStorageService.getProperty("language") || 'tw';
    };

    vm.getLanguageName = function () {
      return languageService.getLanguageName($rootScope.data.language);
    };
  }]);

  app.controller('OrderController', ['localStorageService', '$filter', '$rootScope', '$timeout', function (localStorageService, $filter, $rootScope, $timeout) {
    var vm = this;
    vm.menuList = $rootScope.data.menuList;
    vm.menuList = $filter('orderBy')(vm.menuList, 'id');
    vm.checkList = $rootScope.data.checkList;
    //vm.checkList = $filter('orderBy')(vm.checkList , 'id');
    vm.checkId = $rootScope.data.checkId;

    vm.orderList = $rootScope.data.orderList;

    vm.plus = function (item) {
      var copy = angular.copy(item);
      var target = {};
      angular.forEach(vm.orderList.data, function (value, key) {
        if (value.id == item.id) {
          target = value;
        }
      });
      if (target.id > 0) {
        target.count++;
      }
      else {
        copy.count = 1;
        vm.orderList.data.push(copy);
      }
    };

    vm.minus = function (item) {
      var copy = angular.copy(item);
      var target = {};
      angular.forEach(vm.orderList.data, function (value, key) {
        if (value.id == item.id) {
          target = value;
        }
      });
      if (target.id > 0) {
        target.count--;
        if (target.count == 0) {
          vm.orderList.data.splice(vm.orderList.data.indexOf(target), 1);
        }
      }
    };

    vm.count = function (item) {
      var size = 0
      angular.forEach(vm.orderList.data, function (value, key) {
        if (value.id == item.id) {
          size = value.count;
        }
      });
      return size;
    };



    vm.submit = function () {
      if (vm.orderList.data.length > 0) {
        $rootScope.swal({
          title: "已輸入完成?",
          text: "菜單將會轉到結帳區",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "點菜完成",
          closeOnConfirm: false
        }, function () {
          vm.submitSuccess();
          swal("完成!", "菜單已經轉到結帳區", "success");
        });
      } else {
        swal("錯誤!", "尚未選擇商品", "error");
      }
    };

    vm.submitSuccess = function () {
      $timeout(function () {
        var copy = angular.copy(vm.orderList);

        if (copy.id) {
          angular.forEach(vm.checkList, function (value, key) {
            if (value.id === copy.id)
              vm.orderList[key] = copy;
          });
          localStorageService.setProperty("checkList", vm.checkList);
        } else {
          if (copy.phone == 1) {
            copy.id = new Date();
          } else {
            var id = $rootScope.data.checkId;
            //if(vm.checkList.length){          
            //  id = vm.checkList[vm.checkList.length-1]["id"];  
            //}
            id++;
            if (id > 50) {
              id = 1;
            }
            copy.id = id;            
            vm.checkId = id;
            $rootScope.data.checkId = vm.checkId;
            localStorageService.setProperty("checkId", vm.checkId);
          }
          vm.checkList.push(copy);
          localStorageService.setProperty("checkList", vm.checkList);
        }
        vm.orderList = { data: [], spicy: 0, pay: 1, phone: 0 };
        $rootScope.data.orderList = vm.orderList;
      }, 1);
    };

    vm.clear = function () {
      vm.orderList = { data: [], spicy: 0, pay: 1 };
      $rootScope.data.orderList = vm.orderList;
    };

    vm.newId = function (id) {
      if (!id) {
        if (vm.checkId + 1 > 50) {
          return 1;
        }
        else {
          return vm.checkId + 1;
        }
      }
    }
  }]);


  app.controller('CheckController', ['localStorageService', '$filter', '$rootScope', '$timeout', function (localStorageService, $filter, $rootScope, $timeout) {
    var vm = this;
    vm.orderList = $rootScope.data.orderList;
    vm.checkList = $rootScope.data.checkList;

    vm.edit = function (list) {
      $rootScope.data.orderList = list;
      $rootScope.data.setTab(1);
    };

    vm.submit = function (item) {
      $rootScope.swal({
        title: "已交貨?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "完成",
        closeOnConfirm: false
      }, function () {
        vm.submitSuccess(item);
        swal("完成!", "已交貨：結帳單 " + item.id + "", "success");
      });
    }

    vm.submitSuccess = function (item) {
      $timeout(function () {
        angular.forEach(vm.checkList, function (value, key) {
          if (value.id == item.id) {
            vm.checkList.splice(key, 1);
          }
        });
        localStorageService.setProperty("checkList", vm.checkList);
      }, 1);
    };

    vm.reId = function () {
      $rootScope.swal({
        title: "單號強制重算?",
        text: "",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "確定",
        closeOnConfirm: false
      }, function () {
        vm.reIdSuccess();
        swal("完成!", "單號已從頭開始計算", "success");
      });
    };

    vm.reIdSuccess = function () {
      $timeout(function () {
        $rootScope.data.checkId = 0;
        localStorageService.setProperty("checkId", $rootScope.data.checkId);
      }, 1);
    };
  }]);

  app.controller('OptionController', ['localStorageService', '$filter', '$rootScope', function (localStorageService, $filter, $rootScope) {
    var vm = this;

    vm.isList = true;
    vm.menuList = $rootScope.data.menuList;
    vm.menuList = $filter('orderBy')(vm.menuList, 'id');
    vm.item = {};

    vm.submit = function () {
      var copy = angular.copy(vm.item);

      if (vm.item.id) {
        angular.forEach(vm.menuList, function (value, key) {
          if (value.id === copy.id)
            vm.menuList[key] = copy;
        });
      } else {
        var id = 1;
        if (vm.menuList.length) {
          id = vm.menuList[vm.menuList.length - 1]["id"] * 1 + 1;
        }
        copy.id = id;
        vm.menuList.push(copy);
      }
      vm.isList = true;
      vm.item = {};
      localStorageService.setProperty("menuList", vm.menuList);
    };
  }]);
})();