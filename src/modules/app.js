
var CatRoster = {
  controller: function(){

    var title = m.prop('Cat Roster');

    var activeCat = m.prop(false);

    var cats = m.prop([
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
    ]);

    return {
      title: title,
      cats: cats,
      activeCat: activeCat,

      catClick: catClick,
    }

    function catClick(){
      activeCat(this);
      console.log(activeCat());
    }

  },
  view: function(ctrl){
    return m('div.roster', [
      m('h1', ctrl.title()),
      m('ul.cats', [
        ctrl.cats().map(function(cat){
          return m('li.cats-cat', { onclick: ctrl.catClick.bind(cat) }, [
            m('span.cats-cat-id', cat.id),
            m('span.cats-cat-name', cat.name)
          ])
        })
      ]),
      function(){
        if(ctrl.activeCat()){
          return m('h2', ctrl.activeCat().name )
        } else {
          return
        }
      }()

    ])
  }
}

