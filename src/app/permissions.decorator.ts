export function hasPermission( roles: string[] = [] ) {
  
  return function( target, key, descriptor ) {

    var originalMethod = descriptor.value;

    descriptor.value = function (...args) {

      
       
       if(roles.indexOf('admin') == -1){
       console.log('unauthorized');
       }
       else{
        originalMethod.apply(this, args);
       }
       

    };

    return descriptor;
  }


}