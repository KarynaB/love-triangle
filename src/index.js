/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var on = 0;
    var kod = 0;
    var a=0;
    var b=0;
    var c =0;
    for (var i=0; i<=preferences.length; i++){
    a= preferences[i];
    b=preferences[a-1];
    c=preferences[b-1];
        if(c===i+1 && a!=i && a>c && i<b-1)
        {
          on++;  } else on=0;
          if(on===1)
      {
        on=0;
        kod++;
    } 
    }
  return kod;
};

