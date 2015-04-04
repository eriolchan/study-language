// Code cannot run, just show as example.

server.on('request', getMemCached(req, res) {
    memcached.getSession(req, getDbInfo(session) {
        db.get(session.user, getWsInfo(userData) {
            ws.get(req, render(wsData) {
                page = pageRender(req, session, userData, wsData);
                res.write(page);
            });
        });
    });
});
