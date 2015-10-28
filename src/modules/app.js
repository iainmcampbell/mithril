
var CatRoster = {
  controller: function(){

    var title = m.prop('Cat Roster');
    var cats = m.prop([]);
    setup();

    return {
      title: title,
      cats: cats
    }

    // ********************************************************

    function setup(){
      loadCats()
        .then(function(result){
          console.log('loaded', result.length, 'cats');
          cats(result);
        })
    }

    // fake XHR
    function loadCats(){
      return new Promise(function(resolve, reject){

        var catList = [
          { "id": 10, "name": "Grumpy" },
          { "id": 11, "name": "Mr. Nice" },
          { "id": 12, "name": "Narco" },
          { "id": 13, "name": "Bombasto" },
          { "id": 14, "name": "Celeritas" },
          { "id": 15, "name": "Magneta" },
          { "id": 16, "name": "RubberMan" },
          { "id": 17, "name": "Dynama" },
          { "id": 18, "name": "Dr IQ" },
          { "id": 19, "name": "Magma" },
          { "id": 20, "name": "Tornado" }
        ]

        setTimeout(resolve.bind(null, catList), 1000);
      })
    }



  },
  view: function(ctrl){
    return m('div.roster', [
      m('h1', ctrl.title()),
      m('ul.cats', [
        ctrl.cats().map(function(cat){
          console.log(cat);
          return m('li.cats-cat', [
            m('span.cats-cat-id', cat.id),
            m('span.cats-cat-name', cat.name)
          ])
        })
      ])
    ])
  }
}


m.route(document.body, '/', {
  '/': CatRoster
})
