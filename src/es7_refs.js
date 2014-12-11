// https://github.com/zenparsing/es-abstract-refs
!function(REFERENCE){
  REFERENCE_GET = Symbol(SYMBOL+DOT+REFERENCE+'Get');
  var REFERENCE_SET = Symbol(SYMBOL+DOT+REFERENCE+SET)
    , REFERENCE_DELETE = Symbol(SYMBOL+DOT+REFERENCE+'Delete');
  
  $define(STATIC, SYMBOL, {
    referenceGet: REFERENCE_GET,
    referenceSet: REFERENCE_SET,
    referenceDelete: REFERENCE_DELETE
  });
  
  hidden(FunctionProto, REFERENCE_GET, returnThis);
  
  function setMapMethods(Constructor){
    if(Constructor){
      var MapProto = Constructor[PROTOTYPE];
      hidden(MapProto, REFERENCE_GET, MapProto.get);
      hidden(MapProto, REFERENCE_SET, MapProto.set);
      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
    }
  }
  setMapMethods(Map);
  setMapMethods(WeakMap);
}('reference');