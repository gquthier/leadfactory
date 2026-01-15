import { Zap, CheckCircle } from "lucide-react";

const Merci = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Simple Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF5] border-b-3 border-black">
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center h-16 lg:h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#3B82F6] border-3 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl lg:text-3xl font-black text-black uppercase tracking-tight">
                LeadFactory
              </span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-block bg-[#58BC82] border-3 border-black rounded-full p-6 shadow-[8px_8px_0px_0px_#000000] mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#FDE047] border-3 border-black px-6 py-2 -rotate-2 font-black uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_#000000] mb-6">
              RENDEZ-VOUS CONFIRMÉ ✅
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Merci d'avoir booké
              <br />
              <span className="italic text-[#3B82F6] transform -skew-x-12 inline-block">
                un rendez-vous !
              </span>
            </h1>

            <div className="mb-12">
              <div className="bg-white border-3 border-black rounded-full px-6 py-3 shadow-[4px_4px_0px_0px_#000000] inline-block">
                <p className="text-lg font-bold">
                  📅 Nous avons hâte d'échanger avec vous
                </p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-center mb-8">
              Regardez bien cette vidéo avant notre rendez-vous
              <br />
              <span className="text-lg font-bold text-[#3B82F6]">pour plus d'informations</span>
            </h2>

            <div className="border-3 border-black shadow-[8px_8px_0px_0px_#000000]">
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                backgroundImage: 'url(https://cdn.loom.com/sessions/thumbnails/b057b6f314fe476b8aac95ef1663e05e-9d5edb72b8b97919-full-play.gif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <iframe
                  src="https://www.loom.com/embed/b057b6f314fe476b8aac95ef1663e05e"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="brutalist-card bg-[#FFC4EB] text-center max-w-3xl mx-auto">
            <p className="text-xl font-bold mb-4">
              📧 Vous allez recevoir un email de confirmation
            </p>
            <p className="text-base font-bold text-gray-800">
              Si vous avez des questions, n'hésitez pas à nous contacter avant le rendez-vous
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Merci;
