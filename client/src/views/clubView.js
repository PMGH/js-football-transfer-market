var ClubView = function(clubs){
  this.render(clubs);
};

ClubView.prototype = {
  render: function(clubs){
    console.log(clubs);
    clubs.forEach( function(club){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('club-list');
      text.innerText = club;
      li.appendChild(text);
      ul.appendChild(li);
    });
  }
}

module.exports = ClubView;
