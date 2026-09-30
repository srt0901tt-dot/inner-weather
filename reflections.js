export const weathers = [
  { id: 'sun', name: '晴间多云', mark: '☼', tint: 'sun', hint: '有一点亮，也有一点慢' },
  { id: 'rain', name: '正在下雨', mark: '〰', tint: 'rain', hint: '先让情绪落一会儿' },
  { id: 'wind', name: '风有点大', mark: '↝', tint: 'wind', hint: '脑海里有好多声音' },
  { id: 'mist', name: '薄雾时分', mark: '◌', tint: 'mist', hint: '还没看清也没关系' },
];

export const reflections = {
  sun: {
    title: '给正在慢慢变亮的你',
    note: '不必把每一束光都变成成果。今天有一小块地方觉得舒服，就已经值得记下来。',
    prompt: '今天有什么微小的瞬间，让你想多停留一下？',
    footer: '好天气不需要证明自己。',
  },
  rain: {
    title: '给愿意停一停的你',
    note: '雨天不负责赶路。暂时放慢一点，不代表你落后了；有些答案，需要在安静里浮上来。',
    prompt: '如果不用马上解决一切，你最想先照顾哪一件小事？',
    footer: '允许自己，先只是感受。',
  },
  wind: {
    title: '给被很多声音包围的你',
    note: '风把树叶吹得很响，但树还站在自己的位置。试着把别人的期待放远一点，听听自己的声音。',
    prompt: '此刻，什么是你自己真正想要的？',
    footer: '先听见自己，再决定方向。',
  },
  mist: {
    title: '给还在寻找方向的你',
    note: '雾没有让路消失，只是让你暂时看不见很远的地方。眼前一步，也足够成为一个开始。',
    prompt: '如果只决定接下来的十分钟，你会怎么安排？',
    footer: '不确定，也是旅程的一部分。',
  },
};
