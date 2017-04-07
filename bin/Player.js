/**
 * Created by Abos on 01/04/2017.
 */
function Player (username, socketId) {
    this.username = username;
    this.socketId = socketId;
}

Player.prototype.getInfo = function() {
    return this.username + ' ' + this.socketId + ' apple';
};

function Room (Id) {
    this.players = [];
    this.id = Id;
    this.channelId = "";
    this.status = "";
    this.word1 = "";
    this.word2 = "";
    this.spy = "";
    this.currentTurn = "";
    this.numOfPlayers = "";
    this.turnOrder = "";
}

Room.prototype.getInfo = function() {
    return this.id + ' ' + this.id + ' apple';
};

