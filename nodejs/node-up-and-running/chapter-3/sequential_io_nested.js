// Code cannot run, just show as example.

server.on('request', function(req, res) {
    memcached.getSession(req, function(session) {
        db.get(session.user, function(userData) {
            ws.get(req, function(wsData) {
                page = pageRender(req, session, userData, wsData);
                res.write(page);
            });
        });
    });
});
