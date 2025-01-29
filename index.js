import Notifier from 'node-notifier';
import Net from 'net';

function generate (result) {
  let message;
  let icon;

  if (result === 'fail') {
    message = 'Compilation failed';
    icon = 'fail.png';
  } else {
    message = 'Compilation succeeded';
    icon = 'ok.png';
  }

  return {
    title: 'Webpack',
    message,
    icon
  };
}

function main () {
  const server = Net.createServer(function (socket) {
    socket.on('data', function (result) {
      Notifier.notify(generate(result.toString()));
    });
  });

  server.listen(4900, '192.168.255.2');
}

main();
