export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-100 p-8">
      <main className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden p-8 border-t-8 border-cyan-300">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-teal-700 mb-4 flex items-center justify-center gap-2">
            <span>💊</span> Sistema de Gestión Farmacéutica
          </h1>
          <p className="text-lg text-cyan-900 mb-6">
            Administra productos y categorías de manera eficiente
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <a href="/productos">
              <button className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 shadow-md transition-colors flex items-center gap-2">
                <span>🧾</span> Ver Medicamentos
              </button>
            </a>
            <a href="/categorias">
              <button className="px-6 py-3 border border-cyan-600 text-teal-700 font-semibold rounded-lg hover:bg-cyan-50 transition-colors flex items-center gap-2">
                <span>📂</span> Ver Categorías
              </button>
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="💼" 
              title="Gestión de Inventario" 
              description="Control completo de stock y existencias" 
            />
            <FeatureCard 
              icon="🗂️" 
              title="Categorización" 
              description="Organiza productos por categorías y subcategorías" 
            />
            <FeatureCard 
              icon="📈" 
              title="Reportes" 
              description="Genera reportes de ventas y existencias" 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-teal-700 mb-2">{title}</h3>
      <p className="text-cyan-900">{description}</p>
    </div>
  );
}