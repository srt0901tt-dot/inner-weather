import { useState } from 'react';
import { reflections, weathers } from './reflections.js';

export default function App() {
  const [step, setStep] = useState(0);
  const [weather, setWeather] = useState(null);
  const [question, setQuestion] = useState('');
  const [copied, setCopied] = useState(false);
  const result = weather ? reflections[weather.id] : null;

  function restart() {
    setStep(0); setWeather(null); setQuestion(''); setCopied(false);
  }

  async function copyCard() {
    const text = `心绪气象站 · ${weather.name}\n${result.title}\n\n${result.note}\n\n留给自己的问题：${result.prompt}\n\n${result.footer}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); restart(); }}>
          <span className="logo-mark">iw</span><span>INNER WEATHER</span>
        </a>
        <span className="edition">一份给自己的微型明信片</span>
      </header>

      <section className="experience" id="home">
        <div className="side-note"><span className="side-dot" />一间安静的气象站</div>
        <div className="main-panel">
          {step === 0 && <>
            <div className="eyebrow">A SMALL PAUSE · 01 / 03</div>
            <div className="sun-doodle" aria-hidden="true"><i /><b /><span>✳</span></div>
            <h1>今天，你心里的<br /><em>天气</em>怎么样？</h1>
            <p className="intro">不用想得太清楚。选一个最接近此刻的答案，<br className="desktop-break" />给自己留下一张小小的心情明信片。</p>
            <label className="question-label" htmlFor="question">此刻有什么事情，停在你的心里吗？ <span>选填</span></label>
            <textarea id="question" value={question} onChange={(e) => setQuestion(e.target.value.slice(0, 100))} placeholder="写几个字也可以，或者什么都不写……" maxLength={100} />
            <div className="input-meta"><span>只在此页面使用，不会保存</span><span>{question.length} / 100</span></div>
            <button className="primary-button" onClick={() => setStep(1)}>看看我的天气 <span>↗</span></button>
          </>}

          {step === 1 && <>
            <div className="eyebrow">A SMALL PAUSE · 02 / 03</div>
            <h2>如果你的心情是天气，<br /><em>它会是什么？</em></h2>
            <p className="intro">没有对错，挑一个你最有感觉的。</p>
            <div className="weather-grid">
              {weathers.map((item) => <button key={item.id} className={`weather-card ${item.tint}`} onClick={() => { setWeather(item); setStep(2); }}>
                <span className="weather-mark">{item.mark}</span><span className="weather-name">{item.name}</span><span className="weather-hint">{item.hint}</span><span className="card-arrow">↗</span>
              </button>)}
            </div>
            <button className="text-button" onClick={() => setStep(0)}>← 返回</button>
          </>}

          {step === 2 && result && <>
            <div className="eyebrow">A SMALL PAUSE · 03 / 03 <span className="result-weather">{weather.mark} {weather.name}</span></div>
            <div className={`postcard ${weather.tint}`}>
              <div className="postcard-top"><span>INNER WEATHER · NOTE NO. 0{weathers.findIndex((item) => item.id === weather.id) + 1}</span><span className="postcard-icon">{weather.mark}</span></div>
              <div className="postcard-content">
                <span className="to-you">A NOTE TO YOU</span>
                <h2>{result.title}</h2>
                {question && <p className="your-note">“{question}”</p>}
                <p className="reflection-note">{result.note}</p>
                <div className="prompt-box"><span>留给自己的一个问题</span><p>{result.prompt}</p></div>
                <p className="postcard-footer">{result.footer}</p>
              </div>
              <div className="postcard-stamp">IW<br /><span>POST</span></div>
            </div>
            <div className="result-actions">
              <button className="primary-button" onClick={copyCard}>{copied ? '已复制，收好这张卡片' : '复制我的明信片'} <span>{copied ? '✓' : '↗'}</span></button>
              <button className="text-button" onClick={restart}>重新开始</button>
            </div>
          </>}
        </div>
        <div className="side-note side-note-right">PAUSE · NOTICE · KEEP</div>
      </section>

      <footer className="footer"><span>INNER WEATHER STATION</span><span>不预测天气，只记录此刻。</span><span>2026</span></footer>
    </main>
  );
}
