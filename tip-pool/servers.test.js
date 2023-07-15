describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if server name input is blank on submitServerInfo()', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('should add server data to server table on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();

    const curServerData = document.querySelectorAll('#serverTable tbody tr td');

    expect(curServerData[0].innerText).toEqual('Alice');
    expect(curServerData[1].innerText).toEqual('$0.00');
    expect(curServerData[2].innerText).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    updateServerTable();
  });
});
