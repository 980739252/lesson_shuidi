function Player(name,teamColor)
{
   this.enemies = [];//敌人
   this.partners = [];//队友
   this.name = name;
   this.reamColor = teamColor;
   this.state = 'live'
}
Player.prototype.win=function()
{
    //kill all 
    console.log(`${this.name}win`);
}
Player.prototype.loose=function()
{
    console.log(`${this.name}lose`);
}
Player.prototype.die=function()
{
    console.log(`${this.name} die`);
    this.state = 'die';
    let all_dead = true;//都死了
    for(var i = 0,partners;partner = this.partners[i++];)
    {
        if(partner.state ==='live')
        {
            all_dead = false;
            break;
        }
    }
    if (all_dead)
    {
        this.lose();
        for(var i = 0,partner;partner = this.partners[i++];)
        {
            partner.lose();
        }
        for(var i = 0,enemy;enemies[i++];)
        {
            enemy.win();
        }
    }
    
}
//组队  生成玩家  工厂类
var playerFactory = function(name,teamColor)
{
        var newPlayer = new Player(name,
            teamColor);
        for (var i = 0,player;player = this.players[i++];)
        {
            if(player.teamcolor ===newPlayer.teamColor)
            {
                player.partners.push(newPlayer);
                newPlayer.partners.push(player);
            }else{
                player.enemies.push(newPlayer);
                newPlayer.enemies.push(player);
                 }
        }
        players.push(newPlayer);
        return newPlayer;
}
var player1 = playerFactory('小皮','red');
var player2 = playerFactory('小乖','red');
var player3 = playerFactory('小强','red');
var player4 = playerFactory('小黄','red');
//队友是谁？敌人是谁？交给工厂去做
var player5 = playerFactory('小范','blue');
var player6 = playerFactory('小黑','blue');
var player7 = playerFactory('小张','blue');
var player8 = playerFactory('小吴','blue');
//console.log(palyer1.partners,player1.enemies);

player1.die();
player2.die();
player3.die();
player4.die();


