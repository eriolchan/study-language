// Code cannot run, just show as example

server.on('request', function(req, res) {

    var render = function(wsData) {
        page = pageRender(req, session, userData, wsData);
    };

    var getWsInfo = function(userData) {
        ws.get(req, render);
    };

    var getDbInfo = function(session) {
        db.get(session.user, getWsInfo);
    };

    var getMemCached = function(req, res) {
        memcached.getSession(req, getDbInfo);
    };
}
