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

const server = Net.createServer(function (socket) {
  socket.on('data', function (result) {
    Notifier.notify(generate(result.toString()));
  });
});

server.listen(4900, '10.0.2.2');
