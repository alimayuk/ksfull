import React from "react";
import "./FaqComp.css";
import Faq from "react-faq-component";
const FaqComp = () => {
  const data = {
    rows: [
      {
        title: "KAH Yazılım, kurumsal web tasarım hizmetleri sunuyor mu?",
        content: "KAH Yazılım, işletmeler için özelleştirilmiş, profesyonel ve etkili web tasarım çözümleri sunar. Kurumsal web tasarımı, şirketlerin dijital varlıklarını oluşturmak, geliştirmek veya yeniden şekillendirmek için özel olarak tasarlanmış web sitelerini içerir.",
      },
      {
        title: "Kurumsal web tasarımı neden önemlidir?",
        content:
          "İşletmelerin online varlığını güçlendirmek, marka kimliğini yansıtmak, müşterilere erişim sağlamak ve rekabetçi olmak için kurumsal web tasarımı kritik bir rol oynar. Profesyonel bir web sitesi, güvenilirlik kazanmak ve müşterileri çekmek açısından önemlidir.",
      },
      {
        title: "Web tasarım süreci nasıl işler?",
        content:
          "Web tasarım süreci genellikle ihtiyaç analizi, tasarım konseptlerinin oluşturulması, geliştirme, test aşamaları ve son olarak lansman aşamalarından oluşur. KAH yazılım, projenin müşterinin beklentilerine uygun olması için müşteri gereksinimlerini anlamak ve bu doğrultuda adımlarını belirlemek üzerine odaklanır.",
      },
      {
        title: "Proje yapım aşaması ne kadar sürer?",
        content: "KAH yazılımın web tasarım projeleri genellikle farklılık gösterebilir; ancak genel olarak proje büyüklüğüne, karmaşıklığına ve müşterinin taleplerine bağlı olarak değişkenlik gösterebilir.",
      },
    ],
  };
  const styles = {
     arrowColor: "white",
};
const config = {
  animate: true,
  expandIcon: "+",
  collapseIcon: "-",
};
  return (
    <div className="Faq">
      <div className="container">
        <div className="left">
          <h1>Sıkça Sorulan Sorular</h1>
          <p>Kurumsal Web Tasarımı ile ilgili sıkça sorulan soruları yanıtladık.</p>
        </div>
        <div className="right">
          <Faq config={config} styles={styles} data={data} />
        </div>
      </div>
    </div>
  );
};

export default FaqComp;
