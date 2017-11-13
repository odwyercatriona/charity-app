angular
  .module('charityApp')
  .controller('shopFormController', shopFormController);

shopFormController.$inject  = ['Shop', '$state'];
function shopFormController(Shop, $state){
  const vm = this;

  vm.submit = shop =>  {
    console.log('submitted shop!');
    Shop
      .save(shop)
      .$promise
      .then(()=> {
        console.log(shop);
        $state.go('shopsIndex');
      });
  };
}