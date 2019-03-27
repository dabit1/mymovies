import requireHacker from 'require-hacker';

requireHacker.hook('jpg', () => 'module.exports = ""');
requireHacker.hook('jpeg', () => 'module.exports = ""');
requireHacker.hook('png', () => 'module.exports = ""');
requireHacker.hook('gif', () => 'module.exports = ""');
requireHacker.hook('css', () => 'module.exports = ""');
requireHacker.hook('scss', () => 'module.exports = ""');
