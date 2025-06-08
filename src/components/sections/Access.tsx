export default function Access() {
  return (
    <section id="access">
      <div className="container-custom">
        <div className="section-title">
          <h2>ACCESS</h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="card gradient-border">
            <h3 className="text-[20px] font-bold text-center mb-8">
              新宿BLAZE
            </h3>

            <div className="space-y-8">
              <div>
                <p className="font-bold text-[15px] mb-3">住所</p>
                <p className="text-[15px] leading-relaxed">
                  〒160-0021
                  <br />
                  東京都新宿区歌舞伎町1-21-7
                  <br />
                  ヒューマックスパビリオン新宿アネックス B2F
                </p>
              </div>

              <div>
                <p className="font-bold text-[15px] mb-3">アクセス</p>
                <ul className="space-y-1.5 text-[15px]">
                  <li>・JR新宿駅 東口より徒歩8分</li>
                  <li>・西武新宿駅より徒歩3分</li>
                  <li>・地下鉄新宿駅より徒歩5分</li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-[15px] mb-3">
                  会場に関する注意事項
                </p>
                <ul className="space-y-1.5 text-[13px]">
                  <li>・会場内は禁煙です。</li>
                  <li>・飲食物の持ち込みは禁止です。</li>
                  <li>
                    ・ロッカーの数に限りがございます。お手荷物は最小限でお願いいたします。
                  </li>
                  <li>・会場周辺での待機列作りは禁止です。</li>
                </ul>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-10 aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.4980325367447!2d139.7014673!3d35.695197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5c6f3d391%3A0x8eb0a8336e42d677!2z5paw5a6_QkxBWkU!5e0!3m2!1sja!2sjp!4v1709704271247!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
