$.fn.vars = function(){
  var d = {};
  this.find('*[name]').each(function(){
    var n  = this.name;
    switch(this.type){
      case 'text':
      case 'textarea':
      case 'select-one':
        d[n] = this.value;
      break;
      case 'checkbox':
        d[n] = $(this).is(':checked');
      break;
      case 'radio':
        var c = $(this).is(':checked');
        if(c){
          d[n] = this.value;
        }
      break;
      case 'select-multiple':
        d[n] = $(this).find('option:selected').map(function () { return this.value; }).toArray();
      break;
    }
  });
  return d;
}