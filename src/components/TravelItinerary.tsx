import { MapPin, DollarSign, CheckCircle, Plane } from 'lucide-react';

export default function TravelItinerary() {
  const days = [
    {
      day: "Day 1",
      title: "東京首日漫步",
      route: "台北 ➔ 東京",
      details: [
        "航班建議：12:00 前抵達成田 (NRT)",
        "飯店住宿：建議入住交通便利的上野",
        "景點：澀谷 Sky (需提前一個月預約夕陽)",
        "晚餐：敘敘苑燒肉 (上野不忍口店)"
      ]
    },
    {
      day: "Day 2",
      title: "櫻花與道頓堀",
      route: "東京 ➔ 大阪新幹線移動",
      details: [
        "搭乘 08:30 Nozomi 17號前進關西",
        "大阪城公園賞櫻 (春季重點景點)",
        "傍晚心齋橋與道頓堀逛街",
        "貼心提醒：行李托運寄往大阪飯店"
      ]
    },
    {
      day: "Day 3",
      title: "環球影城戰鬥日",
      route: "進入超級任天堂世界與哈利波特！",
      details: [
        "預計 08:30 入園，挑戰各項熱門遊樂設施。",
        "午餐推薦：瑪利歐區奇諾比奧咖啡店",
        "晚餐推薦：炸串達摩 難波總店"
      ]
    },
    {
      day: "Day 4",
      title: "古都櫻花巡禮",
      route: "大阪 ➔ 京都文化體驗",
      details: [
        "上午：清水寺與二年坂經典漫步",
        "下午：哲學之道或嵐山賞櫻",
        "午餐：京都順正豆腐名物",
        "晚餐：國產牛燒肉 あぶりや"
      ]
    },
    {
      day: "Day 5",
      title: "吉卜力奇幻日",
      route: "大阪 ➔ 名古屋新幹線",
      details: [
        "行程：吉卜力公園 (Ghibli Park)",
        "重點：大倉庫與魔女之谷",
        "午餐：園內「橫斷大陸」三明治",
        "晚餐：蓬萊軒鰻魚飯三吃"
      ]
    },
    {
      day: "Day 6",
      title: "最後衝刺回程",
      route: "東京一番街補貨 ➔ 準備賦歸",
      details: [
        "上午搭乘新幹線回到東京。",
        "前往東京車站一番街，針對伴手禮及動漫周邊進行最後大掃貨。",
        "整理戰利品並確認行李重量。",
        "下午搭乘機場快線前往成田或羽田機場。"
      ]
    }
  ];

  const budget = [
    { item: "國際機票", cost: "$23,000", desc: "清明旺季傳統航空" },
    { item: "住宿費用", cost: "$12,500", desc: "5 晚雙人房平分" },
    { item: "交通/新幹線", cost: "$11,300", desc: "含三段跨區新幹線與宅急便" },
    { item: "門票費用", cost: "$7,500", desc: "USJ、吉卜力、澀谷 Sky" },
    { item: "餐飲/雜支", cost: "$12,000+", desc: "平均每日 $2,000 豪華餐飲" }
  ];

  return (
    <div className="space-y-8 text-gray-700 pb-4">
      <div className="text-center space-y-4 pt-4">
        <h2 className="text-pink-400 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
          <Plane size={16} /> Tokyo · Osaka · Kyoto · Nagoya
        </h2>
        <h1 className="text-4xl md:text-5xl font-black text-[#ff85a2]">清明櫻花之旅</h1>
        <p className="text-lg font-bold text-gray-500">跨越關東與關西的六日夢幻提案</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border-[3px] border-[#ffdeeb]">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#ff85a2]">
          <MapPin size={24} /> 行程路線概覽
        </h3>
        <p className="font-bold mb-2">從東京進、名古屋出，完美利用新幹線串聯。</p>
        <p className="text-gray-600 font-bold">這趟旅程涵蓋了潮流街景、環球影城、古都文化與吉卜力奇幻世界。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {days.map((day, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border-[3px] border-[#ffdeeb] hover:-translate-y-1 transition duration-300">
             <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3 mb-3">
               <h4 className="text-2xl font-black text-[#74c0fc]">{day.day}</h4>
               <h5 className="text-lg font-bold text-gray-800">{day.title}</h5>
             </div>
             <p className="text-sm font-bold text-[#ff85a2] mb-4 bg-[#ffdeeb]/40 inline-flex px-3 py-1.5 rounded-full border border-[#ffdeeb]">
               {day.route}
             </p>
             <ul className="space-y-2.5">
               {day.details.map((detail, i) => (
                 <li key={i} className="flex gap-2 text-sm text-gray-600">
                   <CheckCircle size={16} className="text-[#a5d8ff] shrink-0 mt-0.5" />
                   <span className="font-bold">{detail}</span>
                 </li>
               ))}
             </ul>
          </div>
        ))}
      </div>

      <div className="bg-[#fff9db] p-6 rounded-3xl border-4 border-white shadow-sm">
        <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-[#f08c00]">
          <DollarSign size={24} /> 預算花費明細表
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-white text-[#f08c00]">
                <th className="py-3 pr-4 font-black">項目</th>
                <th className="py-3 pr-4 font-black">估算金額 (TWD)</th>
                <th className="py-3 font-black">說明</th>
              </tr>
            </thead>
            <tbody>
              {budget.map((item, idx) => (
                <tr key={idx} className="border-b border-white/50">
                  <td className="py-3 pr-4 font-bold text-gray-800">{item.item}</td>
                  <td className="py-3 pr-4 font-bold text-[#ff85a2]">{item.cost}</td>
                  <td className="py-3 text-sm text-gray-600 font-bold">{item.desc}</td>
                </tr>
              ))}
              <tr className="bg-white/40">
                <td className="py-4 pr-4 font-black text-gray-800 rounded-l-2xl pl-3">總計預估</td>
                <td className="py-4 pr-4 font-black text-xl text-[#f08c00]">$66,300</td>
                <td className="py-4 text-sm font-bold text-gray-600 rounded-r-2xl">建議準備 $75,000 較保險</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center pt-8 pb-4">
        <h3 className="text-3xl font-black text-[#ff85a2] mb-3">Ready to Explore?</h3>
        <p className="text-lg font-bold text-gray-600 mb-2">櫻花季限定，現在就預約您的完美假期！</p>
        <p className="text-sm font-bold text-gray-400">備註：吉卜力公園與澀谷 Sky 需提早預約。祝您旅途愉快！</p>
      </div>
    </div>
  );
}
