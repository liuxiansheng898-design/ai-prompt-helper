import { useState } from 'react'

function App() {
  const [prompt, setPrompt] = useState('')
  const [type, setType] = useState('image')
  const [style, setStyle] = useState('realistic')

  const generatePrompt = () => {
    const templates = {
      image: {
        realistic: 'A high-quality photograph of [SUBJECT], professional lighting, 8K resolution, detailed texture',
        anime: 'Anime style illustration of [SUBJECT], vibrant colors, detailed background, studio Ghibli inspired',
        cinematic: 'Cinematic shot of [SUBJECT], dramatic lighting, film grain, 35mm camera effect'
      },
      video: {
        realistic: '[ACTION] in realistic style, smooth camera movement, natural lighting, 4K',
        anime: '[ACTION] in anime style, vibrant colors, dynamic movement, Japanese animation',
        cinematic: '[ACTION] cinematic video, dramatic lighting, slow motion, film quality'
      }
    }
    
    const template = templates[type]?.[style] || templates.image.realistic
    setPrompt(template)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">🐂 AI 提示词助手</h1>
        
        <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
          <div className="flex gap-4 mb-6">
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-white/20 rounded-lg px-4 py-2"
            >
              <option value="image">文生图</option>
              <option value="video">文生视频</option>
            </select>
            
            <select 
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="bg-white/20 rounded-lg px-4 py-2"
            >
              <option value="realistic">写实</option>
              <option value="anime">动漫</option>
              <option value="cinematic">电影感</option>
            </select>
          </div>

          <button 
            onClick={generatePrompt}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-bold hover:opacity-90"
          >
            生成提示词
          </button>

          {prompt && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">生成的提示词：</p>
              <p className="text-lg">{prompt}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
