// VENVM LINE — consolidated storefront app (single x-import entry).
// Built from the ui_kits/storefront screens; the design-system destructure is
// deferred until window.VENVMLINEDesignSystem_2d12f7 (the _ds_bundle) is ready.

/* ============================ demo data ============================ */
// VENVM LINE — shared demo data + image assets for the storefront UI kit.
// Images are the original storefront's Google-hosted product shots (stable CDN).
window.VENVM_IMG = {
  car: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBurD_jLBZq1wu8N1IfiqgjZkMrxA2Jhy41YofeIbSNOxP5Ap7ug_-0JYEFaNFQj5UetcI6AwZVmX6SrdOFQCyc8mZnZxi-Id7AbImgy7UO9e23Dzg5SuyA3H04zS30sGThVR9w9OD7S4BakdFT-jzOmXmEor4NP9zBhVMNwo7ObEW1g3gM82Pr2BGRja6lOnLgZJz_zims2L0ht-N9KYVGzrvUzUHbhQ36yvKwG6X1pwoCqo85u7B-iuG9cjmwEBD9RE9rreYs-1Yd',
  intake: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVoXahjg9ixu3GwEbE-XpNRMetX8LliT_JkXbA9NuRCXT32ui5jR8vI_SSb0hxtkf3ikQ3UU1HDoWlmCQa1b5fe6gZSUZ1fedxwesRLXJIY9PDJEmFM4xWeu69Sc3OlmvVGIKqlsa5lfGbje4No9I2vZZAUMp7BsrFswJBfxAGVyhnT1GwlH1Q6mhT0GldWPTOrbzeciTx6OUviKopriqLN3Qr9I3cgVGFLd-Yy_M1gX_HLYPg8ES9Z__N2h7UQwxzHyFeohWF67D5',
  exhaust: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYpfxoyS-nJpGP3Smy4Sg5Qu3XDHb-Hr268TIiaojuShpyKolUEH6_3Z9DQNE9-pJJfk14kiJruUm7-VLmZ-ut7Nt6xIcESgZP1MU905mEqkQgxhHrY4Ry-MoHQIn4VUFj-UYSiMNl97oZ4R-nDoxoaRgY0p-zMF8_AR7wGoqs5H8T_1CXo2dOQR8es4z8wp5Xs_LVhziEXxsCUPDzpENvgLFEjRrmK21aRMuSbEpEgmbZoMDsvjCF0tf2pyGKULV1haMnG04Zzxek',
};

window.VENVM_CATEGORIES = [
  { tag: 'Race Spec', tone: 'magenta', icon: 'speed', title: 'Performance Tuning', desc: 'ECU remapping and physical component upgrades for peak horsepower.' },
  { tag: 'Lightweight', tone: 'neutral', icon: 'air', title: 'Aero & Carbon', desc: 'Wind-tunnel tested carbon fiber components for superior downforce.' },
  { tag: 'Titanium', tone: 'magenta', icon: 'surround_sound', title: 'Exhaust Systems', desc: 'Signature acoustic engineering with lightweight valvetronic systems.' },
  { tag: 'Forged', tone: 'neutral', icon: 'settings_motion_mode', title: 'Forged Wheels', desc: 'Ultra-lightweight aerospace grade aluminum alloy wheel sets.' },
];

window.VENVM_PRODUCTS = [
  { id: 'intake', name: 'V-FLOW INTAKE', sub: 'Carbon Fiber Cold Air Intake', price: 1850, img: 'intake',
    feats: ['+18 WHP Gain (Dyno Tested)', '2x2 Pre-preg Carbon Fiber', 'High-flow Washable Filter'] },
  { id: 'exhaust', name: 'VALVEMASTER TI', sub: 'Full Titanium Valvetronic Exhaust', price: 4200, img: 'exhaust',
    feats: ['Full Grade 5 Titanium', 'Active Valve Control Module', '-12kg Weight Reduction'] },
];

// External Shopify storefront — checkout/fulfilment lives here.
// Placeholder URL; swap for the live store when it's set up.
window.VENVM_SHOPIFY_URL = 'https://venvm-line.myshopify.com';

// Full Shop catalogue — on-brand placeholder SKUs across the four core categories.
window.VENVM_SHOP = [
  { id: 'vflow',    name: 'V-FLOW INTAKE',     sub: 'Carbon Fiber Cold Air Intake',   price: 1850, img: 'intake',  cat: 'Performance', tag: 'Race Spec',   tone: 'magenta', spec: '+18 WHP' },
  { id: 'ecu2',     name: 'STAGE 2 ECU TUNE',  sub: 'Custom Dyno Calibration Map',    price: 1200, img: 'car',     cat: 'Performance', tag: 'Race Spec',   tone: 'magenta', spec: '+92 WHP' },
  { id: 'coil',     name: 'COILOVER PRO-R',    sub: '32-Way Adjustable Coilovers',    price: 3250, img: 'car',     cat: 'Performance', tag: 'Race Spec',   tone: 'magenta', spec: '32-WAY' },
  { id: 'brake',    name: 'BIG BRAKE KIT',     sub: '6-Piston Forged Calipers',       price: 4800, img: 'exhaust', cat: 'Performance', tag: 'Race Spec',   tone: 'magenta', spec: '405mm' },
  { id: 'valve',    name: 'VALVEMASTER TI',    sub: 'Full Titanium Valvetronic Exhaust', price: 4200, img: 'exhaust', cat: 'Exhaust',  tag: 'Titanium',    tone: 'magenta', spec: '-12kg' },
  { id: 'downpipe', name: 'DOWNPIPE TI-CAT',   sub: 'Catless Titanium Downpipe',      price: 1450, img: 'exhaust', cat: 'Exhaust',     tag: 'Titanium',    tone: 'magenta', spec: '3.5"' },
  { id: 'splitter', name: 'AERO SPLITTER V2',  sub: 'Front Carbon Splitter',          price: 2400, img: 'intake',  cat: 'Aero',        tag: 'Lightweight', tone: 'neutral', spec: '2x2 TWILL' },
  { id: 'gtwing',   name: 'GT WING ELITE',     sub: 'Adjustable Carbon Rear Wing',    price: 3100, img: 'exhaust', cat: 'Aero',        tag: 'Lightweight', tone: 'neutral', spec: '+38kg DF' },
  { id: 'diffuser', name: 'LIP DIFFUSER',      sub: 'Rear Carbon Diffuser',           price: 1900, img: 'intake',  cat: 'Aero',        tag: 'Lightweight', tone: 'neutral', spec: 'PRE-PREG' },
  { id: 'mirror',   name: 'CARBON MIRROR CAPS',sub: 'Pre-preg Replacement Caps',      price: 480,  img: 'intake',  cat: 'Aero',        tag: 'Lightweight', tone: 'neutral', spec: '-0.4kg' },
  { id: 'fx7',      name: 'FORGED FX-7',       sub: '20" Monoblock Forged Set',       price: 5600, img: 'car',     cat: 'Wheels',      tag: 'Forged',      tone: 'neutral', spec: '6061-T6' },
  { id: 'fx9',      name: 'FORGED FX-9',       sub: '19" Flow-Forged Set',            price: 3900, img: 'car',     cat: 'Wheels',      tag: 'Forged',      tone: 'neutral', spec: '-8.2kg' },
];

/* ===================== component factory ===================== */
let RootAppRef = null;
function defineComponents() {
  const { Button, IconButton, Tag, Card, SpecTile, Input } = window.VENVMLINEDesignSystem_2d12f7;
  const BrandIconButton = IconButton;

  // ---- responsive viewport context ----
  const ViewportCtx = React.createContext({ w: 1440, isMobile: false, isTablet: false });
  const useVP = () => React.useContext(ViewportCtx);
  function useViewport() {
    const read = () => (typeof window !== 'undefined' ? window.innerWidth : 1440);
    const [w, setW] = React.useState(read());
    React.useEffect(() => {
      const on = () => setW(read());
      window.addEventListener('resize', on);
      return () => window.removeEventListener('resize', on);
    }, []);
    return { w, isMobile: w < 768, isTablet: w >= 768 && w < 1024 };
  }

  // VENVM LINE — NavBar + Footer (shared chrome)

  const navWrap = {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'var(--nav-fill)',
    backdropFilter: 'blur(var(--nav-blur))', WebkitBackdropFilter: 'blur(var(--nav-blur))',
    borderBottom: '1px solid rgba(63,71,83,0.1)',
  };
  const navInner = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    height: 'var(--nav-height)', padding: '0 48px', maxWidth: 'var(--layout-max)', margin: '0 auto',
  };
  const linkStyle = (active) => ({
    fontFamily: 'var(--font-headline)', fontSize: 'var(--label-md-size)',
    textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
    color: active ? 'var(--primary)' : 'var(--on-surface-variant)',
    borderBottom: active ? '2px solid var(--primary)' : '2px solid transparent',
    paddingBottom: 4, cursor: 'pointer', textDecoration: 'none',
    transition: 'color var(--dur-base) var(--ease-standard)',
  });

  function NavBar({ go, active, cartCount }) {
    const { isMobile } = useVP();
    const [open, setOpen] = React.useState(false);
    const links = [
      { label: 'Home', screen: 'home' },
      { label: 'Shop', screen: 'shop' },
      { label: 'Brands', screen: 'brands' },
      { label: 'About Us', screen: 'about' },
      { label: 'Customer Support', screen: 'support' },
    ];
    const isActive = (l) => active === l.screen && l.screen !== null;
    const goAnd = (s) => { if (s) go(s); setOpen(false); };

    React.useEffect(() => {
      if (!isMobile) { document.body.style.overflow = ''; return; }
      document.body.style.overflow = open ? 'hidden' : '';
      return () => { document.body.style.overflow = ''; };
    }, [open, isMobile]);

    return (
      <React.Fragment>
      <nav style={navWrap}>
        <div style={{ ...navInner, padding: isMobile ? '0 20px' : '0 48px' }}>
          <span onClick={() => goAnd('home')} style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-md-size)', letterSpacing: '-0.02em', color: 'var(--on-surface)', cursor: 'pointer' }}>VENVM LINE</span>
          {!isMobile && (
            <div style={{ display: 'flex', gap: 28 }} className="venvm-navlinks">
              {links.map((l) => (
                <a key={l.label} onClick={() => l.screen ? go(l.screen) : null} style={linkStyle(isActive(l))}>{l.label}</a>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 6 : 16 }}>
            {!isMobile && (
              <input className="venvm-search" placeholder="SEARCH" style={{
                background: 'var(--surface-container-low)', border: 'none', borderRadius: 'var(--radius-sm)',
                padding: '7px 14px', width: 168, color: 'var(--on-surface)',
                fontFamily: 'var(--font-label)', fontSize: 12, letterSpacing: '0.1em', outline: 'none',
              }} />
            )}
            <IconButton icon="shopping_cart" badge={cartCount > 0 ? cartCount : undefined} active={active === 'cart'} onClick={() => go('cart')} ariaLabel="Cart" />
            {!isMobile && <IconButton icon="account_circle" active={active === 'account'} onClick={() => go('account')} ariaLabel="Account" />}
            {isMobile && <IconButton icon={open ? 'close' : 'menu'} onClick={() => setOpen((o) => !o)} ariaLabel="Menu" />}
          </div>
        </div>

      </nav>
        {isMobile && open && (
          <div style={{ position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0, bottom: 0, zIndex: 90, background: 'var(--background)', display: 'flex', flexDirection: 'column', padding: '12px 20px 28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              {links.map((l) => (
                <a key={l.label} onClick={() => goAnd(l.screen)} style={{
                  fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 30,
                  textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)',
                  color: isActive(l) ? 'var(--primary)' : 'var(--on-surface)',
                  padding: '22px 0', borderBottom: '1px solid var(--divider)',
                  cursor: 'pointer', textDecoration: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {l.label}
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--on-surface-variant)' }}>arrow_outward</span>
                </a>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="ghost" fullWidth icon="account_circle" onClick={() => goAnd('account')}>Account</Button>
              <Button variant="primary" fullWidth icon="shopping_cart" onClick={() => goAnd('cart')}>Cart{cartCount > 0 ? ' (' + cartCount + ')' : ''}</Button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }

  const footCol = { display: 'flex', flexDirection: 'column', gap: 24 };
  const footHead = { fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', letterSpacing: '0.1em', color: 'var(--on-surface)', margin: 0 };
  const footLink = { fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)', textDecoration: 'none', cursor: 'pointer' };

  function Footer() {
    const cols = [
      { h: 'SUPPORT', items: ['Warranty', 'Shipping', 'Dealers'] },
      { h: 'LEGAL', items: ['Privacy', 'Terms', 'Contact'] },
    ];
    return (
      <footer style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--divider)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, padding: 'clamp(48px, 8vw, 64px) clamp(20px, 5vw, 48px)', maxWidth: 'var(--layout-max)', margin: '0 auto' }}>
          <div style={footCol}>
            <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-sm-size)', color: 'var(--on-surface)' }}>VENVM LINE</span>
            <p style={{ margin: 0, fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)', opacity: 0.8 }}>Forging the future of high-performance automotive engineering.</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <IconButton icon="share" size="sm" ariaLabel="Share" />
              <IconButton icon="rss_feed" size="sm" ariaLabel="RSS" />
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h} style={footCol}>
              <h5 style={footHead}>{c.h}</h5>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.items.map((i) => <li key={i}><a style={footLink}>{i}</a></li>)}
              </ul>
            </div>
          ))}
          <div style={footCol}>
            <h5 style={footHead}>NEWSLETTER</h5>
            <p style={{ margin: 0, fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)' }}>Get early access to limited edition drops.</p>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--outline-variant)' }}>
              <input placeholder="EMAIL ADDRESS" style={{ background: 'transparent', border: 'none', flex: 1, padding: '8px 0', color: 'var(--on-surface)', fontFamily: 'var(--font-label)', fontSize: 12, letterSpacing: '0.1em', outline: 'none' }} />
              <IconButton icon="arrow_forward" size="sm" active ariaLabel="Subscribe" />
            </div>
          </div>
        </div>
        <div style={{ padding: '32px clamp(20px, 5vw, 48px)', borderTop: '1px solid var(--divider)', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)', opacity: 0.6 }}>© 2026 VENVM LINE. ENGINEERED TO PERFECTION.</p>
        </div>
      </footer>
    );
  }

  // VENVM LINE — Home screen (hero, categories, new arrivals, brand story)

  const maxW = { maxWidth: 'var(--layout-max)', margin: '0 auto' };
  const h2 = { fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-xl-size)', letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: '0 0 8px' };
  const eyebrow = { fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: 0 };

  function Hero({ go }) {
    const { isMobile } = useVP();
    return (
      <section style={{ position: 'relative', height: isMobile ? 600 : 720, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: isMobile ? 140 : 212, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="assets/images/hero-m4.jpg" alt="VENVM LINE — matte-black M4 Competition" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 62%', filter: 'brightness(0.92) contrast(1.05)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 55% at 50% 95%, rgba(255,78,124,0.10), transparent 60%)' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,11,14,0.82) 0%, rgba(10,11,14,0.35) 28%, transparent 50%, rgba(10,11,14,0.6) 82%, var(--background) 100%)' }}></div>
        </div>
        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: 880 }}>
          <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'clamp(46px, 12vw, 112px)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--on-surface)', margin: '0 0 20px' }}>
            VENVM <span className="venvm-glitch" style={{ color: 'var(--primary)' }}>LINE<span className="g g1" aria-hidden="true">LINE</span><span className="g g2" aria-hidden="true">LINE</span><span className="g g3" aria-hidden="true">LINE</span><span className="g g4" aria-hidden="true">LINE</span></span>
          </h1>
          <p style={{ display: 'inline-block', fontFamily: 'var(--font-label)', fontSize: 'clamp(12px, 3.4vw, 16px)', letterSpacing: 'var(--tracking-hero)', textTransform: 'uppercase', color: 'var(--on-surface-variant)', margin: '0 auto 36px', maxWidth: 640, padding: '10px 20px', background: 'rgba(10,11,14,0.45)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid var(--divider)', borderRadius: 4 }}>
            Engineered to outperform. Precision tuning &amp; accessories for the elite.
          </p>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 14 : 24, justifyContent: 'center', width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? 320 : 'none', margin: isMobile ? '0 auto' : 0 }}>
            <Button variant="primary" size="lg" fullWidth={isMobile} onClick={() => go('product')}
              style={{ background: 'var(--primary)', color: 'var(--on-primary)', boxShadow: 'var(--glow-blue-soft)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--glow-blue-ring)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--glow-blue-soft)'; e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--on-primary)'; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}>Shop Performance</Button>
            <Button variant="ghost" size="lg" fullWidth={isMobile}
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(150,161,173,0.22)'; e.currentTarget.style.borderColor = 'rgba(150,161,173,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(226,226,230,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>Explore Styling</Button>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }} className="venvm-bounce">
          <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>keyboard_double_arrow_down</span>
        </div>
      </section>
    );
  }

  function Categories() {
    return (
      <section style={{ ...maxW, padding: 'clamp(56px, 9vw, 80px) clamp(20px, 5vw, 48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {window.VENVM_CATEGORIES.map((c) => (
            <Card key={c.title} hover style={{ aspectRatio: '4/5', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32 }}>
              <span className="material-symbols-outlined fill" style={{ position: 'absolute', top: 24, right: 24, fontSize: 88, color: 'var(--on-surface)', opacity: 0.18 }}>{c.icon}</span>
              <Tag tone={c.tone} style={{ alignSelf: 'flex-start', marginBottom: 16 }}>{c.tag}</Tag>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-md-size)', color: 'var(--on-surface)', margin: '0 0 8px' }}>{c.title}</h3>
              <p style={{ margin: 0, fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)' }}>{c.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  function NewArrivals({ go }) {
    const { isMobile } = useVP();
    return (
      <section style={{ background: 'var(--surface-container-lowest)', padding: 'clamp(56px, 9vw, 80px) 0' }}>
        <div style={{ ...maxW, padding: '0 clamp(20px, 5vw, 48px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div>
              <h2 style={h2}>NEW ARRIVALS</h2>
              <p style={eyebrow}>Q4 Performance Drop</p>
            </div>
            <a onClick={() => go('shop')} style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--label-md-size)', letterSpacing: 'var(--tracking-widest)', color: 'var(--on-surface-variant)', display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              VIEW ALL <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 24 : 48 }}>
            {window.VENVM_PRODUCTS.map((p) => (
              <Card key={p.id} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 20 : 32, alignItems: isMobile ? 'stretch' : 'center', padding: 24 }}>
                <a onClick={() => go('product')} style={{ width: isMobile ? '100%' : '50%', aspectRatio: '1', background: 'var(--surface-container)', borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer', flexShrink: 0 }}>
                  <img src={window.VENVM_IMG[p.img]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-md-size)', color: 'var(--on-surface)', margin: 0 }}>{p.name}</h4>
                    <span style={{ fontFamily: 'var(--font-label)', color: 'var(--secondary)', fontSize: 16 }}>${p.price.toLocaleString()}</span>
                  </div>
                  <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {p.feats.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)' }}>
                        <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 16 }}>check_circle</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="raised" size="sm" fullWidth onClick={() => go('product')}>Add to Cart</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function BrandStory() {
    const stats = [['15+', 'Years Exp'], ['0.01mm', 'Precision'], ['GLOBAL', 'Network']];
    return (
      <section style={{ padding: 'clamp(72px, 12vw, 104px) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="carbon-texture" style={{ position: 'absolute', inset: 0, opacity: 0.1 }}></div>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', textAlign: 'center', position: 'relative' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: 48, marginBottom: 32 }}>verified</span>
          <h2 style={{ ...h2, fontSize: 'var(--headline-xl-size)', marginBottom: 32 }}>ENGINEERING BEYOND LIMITS</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg-size)', lineHeight: 'var(--body-lg-line)', color: 'var(--on-surface-variant)', marginBottom: 40 }}>
            VENVM LINE is the flagship performance division of <strong style={{ color: 'var(--on-surface)' }}>Blitz International</strong>. We don't just manufacture parts; we engineer advantages. Every component bearing the VENVM mark has undergone rigorous stress testing on track and tarmac.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(28px, 7vw, 64px)' }}>
            {stats.map(([v, l]) => (
              <div key={l}>
                <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-md-size)', color: 'var(--primary)', margin: 0 }}>{v}</p>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--on-surface-variant)', margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function GetInTouch({ getInTouchScale }) {
    const { isMobile } = useVP();
    const gs = getInTouchScale || 1;
    const inputStyle = {
      width: '100%', background: 'var(--surface-container-lowest)',
      border: '1px solid var(--border-faint)', borderRadius: 'var(--radius-md)',
      padding: '15px 16px', color: 'var(--on-surface)',
      fontFamily: 'var(--font-body)', fontSize: 15, outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard)',
    };
    const focus = (e) => { e.currentTarget.style.borderColor = 'var(--primary)'; };
    const blur = (e) => { e.currentTarget.style.borderColor = 'var(--border-faint)'; };
    const field = (ph, key) => (
      <input key={key} className="quote-input" placeholder={ph} aria-label={ph} onFocus={focus} onBlur={blur} style={inputStyle} />
    );
    const labelStyle = { fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: '0 0 10px' };
    const valStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--body-md-size)', color: 'var(--on-surface-variant)', margin: 0, lineHeight: 1.6 };
    const padX = 'clamp(20px, 5vw, 48px)';

    return (
      <section style={{ borderTop: '1px solid var(--divider)' }}>
        {/* ---- Top: Get in touch (full width) ---- */}
        <div style={{ background: 'var(--surface-container-lowest)', padding: isMobile ? `56px ${padX}` : `clamp(72px, 8vw, 112px) ${padX}` }}>
          <div style={{ ...maxW }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: `calc(clamp(52px, 9vw, 128px) * ${gs})`, lineHeight: 0.92, letterSpacing: '-0.025em', color: 'var(--on-surface)', margin: '0 0 40px', textShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>GET IN TOUCH</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: isMobile ? 36 : 48 }}>
              <div>
                <p style={labelStyle}>Phone</p>
                <a href="tel:+15625550199" style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(24px, 2.4vw, 32px)', color: 'var(--on-surface)', textDecoration: 'none' }}>+1 (562) 555-0199</a>
              </div>
              <div>
                <p style={labelStyle}>Location</p>
                <p style={valStyle}>1450 Shoreline Dr<br />Signal Hill<br />Long Beach, CA 90755</p>
              </div>
              <div>
                <p style={labelStyle}>Email</p>
                <a href="mailto:hello@venvmline.com" style={{ ...valStyle, color: 'var(--on-surface)', textDecoration: 'none' }}>hello@venvmline.com</a>
              </div>
              <div>
                <p style={labelStyle}>Instagram</p>
                <a href="https://instagram.com/venvmline" target="_blank" rel="noopener noreferrer" style={{ ...valStyle, color: 'var(--on-surface)', textDecoration: 'none' }}>@venvmline</a>
              </div>
              <div>
                <p style={labelStyle}>Work Hours</p>
                <p style={valStyle}>Mon–Fri: 8:00 – 18:00<br />Sat: 9:00 – 15:00<br />Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Bottom: Request a quote (full width, carbon texture) ---- */}
        <div className="carbon-texture" style={{ background: 'var(--surface-container)', borderTop: '1px solid var(--border-hairline)', padding: isMobile ? `56px ${padX}` : `clamp(72px, 8vw, 112px) ${padX}` }}>
          <div style={{ ...maxW }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'clamp(34px, 4.8vw, 64px)', letterSpacing: '-0.01em', color: 'var(--on-surface)', margin: '0 0 40px' }}>REQUEST A QUOTE</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Request submitted — this is a demo form.'); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {field('Full Name', 'name')}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {field('Email Address', 'email')}
                {field('Confirm Email Address', 'email2')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {field('Phone', 'phone')}
                {field('Vehicle Year', 'year')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {field('Vehicle Make', 'make')}
                {field('Vehicle Model & Trim', 'model')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {field('Engine (4 Cylinder, V6, V8, etc)', 'engine')}
                {field('Engine Size (3.0L, 4.3L, 5.4L, etc)', 'enginesize')}
              </div>
              <textarea className="quote-input" placeholder="Message" aria-label="Message" onFocus={focus} onBlur={blur} rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }} />
              <Button variant="primary" size="lg" icon="send" type="submit" style={{ alignSelf: isMobile ? 'stretch' : 'flex-start', marginTop: 8 }}>Send Request</Button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  function HomeScreen({ go, getInTouchScale }) {
    return <div><Hero go={go} /><Categories /><NewArrivals go={go} /><BrandStory /><GetInTouch getInTouchScale={getInTouchScale} /></div>;
  }

  // VENVM LINE — Shop screen (full catalogue grid + Shopify checkout link)

  function ShopBanner() {
    const { isMobile } = useVP();
    return (
      <div className="carbon-texture glass-panel" style={{
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between',
        gap: isMobile ? 18 : 24, padding: isMobile ? '20px' : '18px 28px',
        borderRadius: 'var(--radius-lg)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 30 }}>storefront</span>
          <div>
            <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--on-surface)', margin: '0 0 4px' }}>
              Checkout on our Shopify store
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)', margin: 0 }}>
              Secure payment, order tracking &amp; fast fulfilment — handled on Shopify.
            </p>
          </div>
        </div>
        <Button variant="primary" size="md" icon="open_in_new" href={window.VENVM_SHOPIFY_URL} target="_blank" rel="noopener noreferrer"
          style={{ flexShrink: 0, alignSelf: isMobile ? 'stretch' : 'auto', textAlign: 'center' }}>Visit Shopify Store</Button>
      </div>
    );
  }

  function ShopCard({ p, go }) {
    return (
      <Card hover padding={0} style={{ display: 'flex', flexDirection: 'column' }}>
        <a onClick={() => go('product')} style={{ display: 'block', position: 'relative', aspectRatio: '1', background: 'var(--surface-container)', overflow: 'hidden', cursor: 'pointer' }}>
          <img src={window.VENVM_IMG[p.img]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Tag tone={p.tone} style={{ position: 'absolute', top: 14, left: 14 }}>{p.tag}</Tag>
          <span style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'var(--font-label)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--primary)', background: 'rgba(10,11,14,0.72)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', padding: '5px 9px', borderRadius: 'var(--radius-sm)' }}>{p.spec}</span>
        </a>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 20 }}>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--on-surface-variant)', margin: '0 0 8px' }}>{p.cat}</p>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', letterSpacing: '0.02em', color: 'var(--on-surface)', margin: '0 0 4px' }}>{p.name}</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)', margin: '0 0 16px' }}>{p.sub}</p>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 'auto', marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 20, color: 'var(--secondary)' }}>${p.price.toLocaleString()}</span>
            <a onClick={() => go('product')} style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Details <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
            </a>
          </div>
          <Button variant="raised" size="sm" icon="open_in_new" fullWidth href={window.VENVM_SHOPIFY_URL} target="_blank" rel="noopener noreferrer">Buy on Shopify</Button>
        </div>
      </Card>
    );
  }

  function ShopScreen({ go }) {
    const { isMobile, isTablet } = useVP();
    const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
    return (
      <div>
        {/* Header */}
        <section style={{ ...maxW, padding: 'clamp(48px, 8vw, 72px) clamp(20px, 5vw, 48px) 0' }}>
          <p style={eyebrow}>Full Catalogue</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'var(--headline-xl-size)', letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: '8px 0 0' }}>SHOP</h1>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>{window.VENVM_SHOP.length} PRODUCTS</span>
          </div>
        </section>

        {/* Shopify banner */}
        <section style={{ ...maxW, padding: 'clamp(28px, 4vw, 40px) clamp(20px, 5vw, 48px) 0' }}>
          <ShopBanner />
        </section>

        {/* Product grid */}
        <section style={{ ...maxW, padding: 'clamp(36px, 5vw, 48px) clamp(20px, 5vw, 48px) clamp(64px, 10vw, 96px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 24 }}>
            {window.VENVM_SHOP.map((p) => <ShopCard key={p.id} p={p} go={go} />)}
          </div>
        </section>
      </div>
    );
  }

  // VENVM LINE — About screen (origin story + co-founders + contact)

  const FOUNDERS = [
    {
      mono: 'MV', name: 'Marcus Vance', role: 'Co-Founder · Fabrication & Chassis',
      origin: 'Long Beach, CA',
      bio: 'A third-generation machinist raised on the floor of his family’s Signal Hill shop, Marcus spent his weekends at Irwindale and the El Mirage dry lakes. He learned the craft the analog way — fixturing, TIG beads, and parts you can feel the tolerances in. Every VENVM component is shaped by his obsession with hardware that earns its weight.',
    },
    {
      mono: 'KT', name: 'Kenji Tan', role: 'Co-Founder · Calibration & Electronics',
      origin: 'San Jose, CA',
      bio: 'Kenji came up as a software engineer who spent his nights deep in the SoCal import scene — datalogging, flashing ECUs, and chasing the last half-degree of timing. Where Marcus trusts metal, Kenji trusts data. He builds the calibration logic and electronics that turn raw mechanical gains into repeatable, track-proven numbers.',
    },
  ];

  function FounderCard({ f }) {
    const { isMobile } = useVP();
    return (
      <Card hover padding={0} style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', overflow: 'hidden' }}>
        {/* Portrait well */}
        <div style={{
          flexShrink: 0, width: isMobile ? '100%' : 240, aspectRatio: isMobile ? '4/3' : '3/4',
          background: '#000', borderRight: isMobile ? 'none' : '1px solid var(--border-hairline)',
          borderBottom: isMobile ? '1px solid var(--border-hairline)' : 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, position: 'relative',
        }}>
          <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 64, letterSpacing: '-0.02em', color: 'var(--on-surface)', opacity: 0.22 }}>{f.mono}</span>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-placeholder)' }}>Portrait</span>
        </div>
        {/* Bio */}
        <div style={{ display: 'flex', flexDirection: 'column', padding: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-md-size)', letterSpacing: '-0.01em', color: 'var(--on-surface)', margin: '0 0 6px' }}>{f.name}</h3>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)', margin: '0 0 4px' }}>{f.role}</p>
          <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.08em', color: 'var(--on-surface-variant)', margin: '0 0 18px', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>location_on</span>{f.origin}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm-size)', lineHeight: 1.65, color: 'var(--on-surface-variant)', margin: 0 }}>{f.bio}</p>
        </div>
      </Card>
    );
  }

  function AboutScreen({ getInTouchScale }) {
    const { isMobile } = useVP();
    const stats = [['EST. 2011', 'Founded'], ['LONG BEACH', 'California HQ'], ['2', 'Drivers, One Line']];
    return (
      <div>
        {/* Header */}
        <section style={{ ...maxW, padding: 'clamp(56px, 9vw, 88px) clamp(20px, 5vw, 48px) 0' }}>
          <p style={eyebrow}>Our Story</p>
          <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'clamp(44px, 8vw, 96px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: 'var(--on-surface)', margin: '8px 0 0' }}>
            BUILT BY <span className="text-glow-blue" style={{ color: 'var(--primary)' }}>DRIVERS</span>
          </h1>
        </section>

        {/* Origin narrative */}
        <section className="carbon-texture" style={{ position: 'relative', marginTop: 'clamp(40px, 6vw, 64px)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', background: 'var(--surface-container-lowest)' }}>
          <div style={{ ...maxW, padding: 'clamp(56px, 8vw, 88px) clamp(20px, 5vw, 48px)' }}>
            <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg-size)', lineHeight: 'var(--body-lg-line)', color: 'var(--on-surface)', margin: 0 }}>
                VENVM LINE was forged in California — the birthplace of car culture. From the post-war hot rods on the dry lakes of El Mirage, to the chrome of the Pomona Swap Meet, to the import tuners trading boost numbers in late-night parking lots, this state has spent eight decades teaching the world that a car is never finished.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-md-size)', lineHeight: 1.7, color: 'var(--on-surface-variant)', margin: 0 }}>
                We grew up inside that history. We are the kids who watched our fathers chase tenths at the strip, who learned that "stock" was just a starting point, and that the difference between fast and fastest lives in the details nobody else bothers to measure. The community raised us — the meets, the build threads, the strangers who handed over a spare part at 2 AM. VENVM LINE is our answer to it: engineering that honors the culture and refuses to compromise.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px, 7vw, 72px)', marginTop: 'clamp(40px, 6vw, 56px)' }}>
              {stats.map(([v, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em', color: 'var(--primary)', margin: 0 }}>{v}</p>
                  <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--on-surface-variant)', margin: '6px 0 0' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section style={{ ...maxW, padding: 'clamp(56px, 9vw, 88px) clamp(20px, 5vw, 48px)' }}>
          <p style={eyebrow}>The Founders</p>
          <h2 style={{ ...h2, fontSize: 'var(--headline-xl-size)', margin: '8px 0 16px' }}>TWO BACKGROUNDS, ONE LINE</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-md-size)', lineHeight: 1.7, color: 'var(--on-surface-variant)', margin: '0 0 48px', maxWidth: 720 }}>
            VENVM LINE started with two people who approached the same obsession from opposite ends — one through metal, one through code — and met in the middle of a track-day paddock.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 24 : 32 }}>
            {FOUNDERS.map((f) => <FounderCard key={f.name} f={f} />)}
          </div>
        </section>

        {/* Contact + quote */}
        <GetInTouch getInTouchScale={getInTouchScale} />
      </div>
    );
  }

  // VENVM LINE — Customer Support screen (commitment + policy accordion + contact)

  function SupportAccordion() {
    const items = [
      { t: 'Limited Product Warranty', b: 'Every VENVM LINE component is backed by a 2-year limited warranty against manufacturing and material defects when installed and used as intended. This section will detail coverage terms, exclusions, and the claims process. Final warranty copy to be confirmed.' },
      { t: 'Shipping Policy', b: 'Orders are processed within 1–2 business days and dispatched via tracked, insured carriers. Full domestic and international rates, transit estimates, and handling-time details will be finalized here.' },
      { t: 'Return/Exchange Policy', b: 'Unused parts in original packaging may be returned within 30 days of delivery. This section will outline eligibility, restocking fees on made-to-order items, and how exchanges are processed. Placeholder text pending final review.' },
      { t: 'Shipping to Us', b: 'Sending a core, a unit for fitment, or a warranty return? Packaging requirements, RMA numbers, and the inbound shipping address will be documented in this section.' },
      { t: 'Repair Services/Information', b: 'Out-of-warranty repair and refurbishment is available on select components. Turnaround times, diagnostic fees, and how to open a service ticket will be detailed here once finalized.' },
      { t: 'Terms of Service', b: 'The agreement governing use of this site and purchase of VENVM LINE products — covering orders, pricing, liability, and dispute resolution. Full legal copy to be inserted.' },
      { t: 'Privacy Policy', b: 'How we collect, use, and protect your data. This section will cover information we gather, third-party processors, cookies, and your rights. Placeholder pending legal sign-off.' },
    ];
    const [open, setOpen] = React.useState(null);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.t} className="glass-panel" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-hairline)', transition: 'border-color var(--dur-base) var(--ease-standard)' }}>
              <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                padding: '22px clamp(18px, 3vw, 28px)',
              }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(15px, 1.8vw, 19px)', textTransform: 'uppercase', letterSpacing: '0.04em', color: isOpen ? 'var(--primary)' : 'var(--on-surface)' }}>{it.t}</span>
                <span className="material-symbols-outlined" style={{ flexShrink: 0, fontSize: 26, color: isOpen ? 'var(--primary)' : 'var(--on-surface-variant)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform var(--dur-base) var(--ease-standard)' }}>expand_more</span>
              </button>
              {isOpen && (
                <div style={{ padding: '0 clamp(18px, 3vw, 28px) 24px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-md-size)', lineHeight: 1.7, color: 'var(--on-surface-variant)', margin: 0, maxWidth: 760 }}>{it.b}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function SupportScreen({ getInTouchScale }) {
    const padX = 'clamp(20px, 5vw, 48px)';
    return (
      <div>
        {/* Header */}
        <section style={{ ...maxW, padding: 'clamp(56px, 9vw, 88px) ' + padX + ' 0' }}>
          <p style={eyebrow}>Here To Help</p>
          <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'clamp(44px, 8vw, 96px)', lineHeight: 0.98, letterSpacing: '-0.03em', color: 'var(--on-surface)', margin: '8px 0 0' }}>
            CUSTOMER <span className="text-glow-blue" style={{ color: 'var(--primary)' }}>SUPPORT</span>
          </h1>
        </section>

        {/* Commitment + direct contact */}
        <section className="carbon-texture" style={{ position: 'relative', marginTop: 'clamp(40px, 6vw, 64px)', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', background: 'var(--surface-container-lowest)' }}>
          <div style={{ ...maxW, padding: 'clamp(56px, 8vw, 88px) ' + padX }}>
            <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-lg-size)', lineHeight: 'var(--body-lg-line)', color: 'var(--on-surface)', margin: 0 }}>
                The same precision we engineer into every part goes into the way we support it. At VENVM LINE, the sale is the start of the relationship — not the end of it. Our team is built from drivers and technicians who know your build matters, and we are committed to delivering the fastest, most knowledgeable support experience in the industry.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-md-size)', lineHeight: 1.7, color: 'var(--on-surface-variant)', margin: 0 }}>
                Whether you need fitment guidance, a warranty claim, or help tuning your setup, you will reach a real person who understands the hardware. We hold ourselves to a one-business-day response standard and stand behind every component we ship.
              </p>
            </div>

            {/* Direct contact at the bottom of the text */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px, 7vw, 72px)', marginTop: 'clamp(36px, 5vw, 48px)', paddingTop: 'clamp(28px, 4vw, 40px)', borderTop: '1px solid var(--divider)' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: '0 0 10px' }}>Email</p>
                <a href="mailto:support@venvmline.com" style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(20px, 2.2vw, 28px)', color: 'var(--on-surface)', textDecoration: 'none' }}>support@venvmline.com</a>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: '0 0 10px' }}>Phone</p>
                <a href="tel:+15625550199" style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(20px, 2.2vw, 28px)', color: 'var(--on-surface)', textDecoration: 'none' }}>+1 (562) 555-0199</a>
              </div>
            </div>
          </div>
        </section>

        {/* Policy accordion */}
        <section style={{ ...maxW, padding: 'clamp(56px, 9vw, 88px) ' + padX }}>
          <p style={eyebrow}>Policies &amp; Information</p>
          <h2 style={{ ...h2, fontSize: 'var(--headline-xl-size)', margin: '8px 0 40px' }}>FREQUENTLY REQUESTED</h2>
          <SupportAccordion />
        </section>

        {/* Get in touch + request a quote */}
        <GetInTouch getInTouchScale={getInTouchScale} />
      </div>
    );
  }

  // VENVM LINE — Brands screen (catalogue wheel + partnership contact)

  const brandsMaxW = { maxWidth: 'var(--layout-max)', margin: '0 auto' };

  // Placeholder brand slots — matte-black wells until real brand art is dropped in.
  const BRAND_SLOTS = [
    'BRAND 01', 'BRAND 02', 'BRAND 03', 'BRAND 04',
    'BRAND 05', 'BRAND 06', 'BRAND 07', 'BRAND 08',
  ];

  function BrandsHeader({ brandsScale }) {
    const s = brandsScale || 1.6;
    return (
      <section style={{ ...brandsMaxW, padding: 'clamp(56px, 10vw, 88px) clamp(20px, 5vw, 48px) 40px', minHeight: '52vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-label)', fontSize: 'calc(var(--label-md-size) * ' + s + ')', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: '0 0 ' + Math.round(16 * s) + 'px' }}>
          Our Network
        </p>
        <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 800, fontSize: 'calc(var(--headline-xl-size) * ' + s + ')', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: '0 0 ' + Math.round(16 * s) + 'px' }}>
          Brand Catalogue
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'calc(var(--body-lg-size) * ' + s + ')', lineHeight: 'var(--body-lg-line)', color: 'var(--on-surface-variant)', margin: 0 }}>
          Discover the brands we carry!
        </p>
      </section>
    );
  }

  function BrandWheel() {
    const { isMobile } = useVP();
    const trackRef = React.useRef(null);
    const drag = React.useRef({ down: false, startX: 0, startScroll: 0 });

    const scrollBy = (dir) => {
      const el = trackRef.current;
      if (el) el.scrollBy({ left: dir * 320, behavior: 'smooth' });
    };

    const onDown = (e) => {
      const el = trackRef.current;
      drag.current = { down: true, startX: e.pageX, startScroll: el.scrollLeft };
      el.style.cursor = 'grabbing';
    };
    const onMove = (e) => {
      if (!drag.current.down) return;
      e.preventDefault();
      trackRef.current.scrollLeft = drag.current.startScroll - (e.pageX - drag.current.startX);
    };
    const endDrag = () => {
      drag.current.down = false;
      if (trackRef.current) trackRef.current.style.cursor = 'grab';
    };

    return (
      <section style={{ padding: '24px 0 96px', position: 'relative' }}>
        {/* Edge fades to give the carousel a "wheel" falloff */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: isMobile ? 32 : 96, background: 'linear-gradient(to right, var(--background), transparent)', zIndex: 3, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: isMobile ? 32 : 96, background: 'linear-gradient(to left, var(--background), transparent)', zIndex: 3, pointerEvents: 'none' }}></div>

        {/* Arrow controls (outside the scroll track) */}
        <div style={{ ...brandsMaxW, padding: '0 clamp(20px, 5vw, 48px)', display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 24 }}>
          <BrandIconButton icon="chevron_left" onClick={() => scrollBy(-1)} ariaLabel="Scroll left" />
          <BrandIconButton icon="chevron_right" onClick={() => scrollBy(1)} ariaLabel="Scroll right" />
        </div>

        <div
          ref={trackRef}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          className="brand-wheel"
          style={{
            display: 'flex', gap: 28, overflowX: 'auto', scrollSnapType: 'x mandatory',
            padding: '8px clamp(20px, 5vw, 48px) 28px', cursor: 'grab', WebkitOverflowScrolling: 'touch',
          }}>
          {BRAND_SLOTS.map((name) => (
            <div key={name} style={{ flex: '0 0 auto', scrollSnapAlign: 'center', display: 'flex', flexDirection: 'column', gap: 16, width: isMobile ? 230 : 280, userSelect: 'none' }}>
              {/* Matte-black image well — blank until brand art is added */}
              <div style={{
                aspectRatio: '4/5', background: '#000', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-hairline)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono, ui-monospace, monospace)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-placeholder)' }}>
                  brand image
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--on-surface)', textAlign: 'center', margin: 0 }}>
                {name}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function PartnershipContact() {
    const boxes = [
      { icon: 'photo_camera', label: 'Instagram', lines: ['@venvmline', 'DM for collabs'] },
      { icon: 'call', label: 'Mobile & Email', lines: ['+1 (000) 000-0000', 'partners@venvmline.com'] },
      { icon: 'location_on', label: 'Mailing Address', lines: ['VENVM LINE HQ', '0000 Performance Way', 'City, ST 00000'] },
    ];
    return (
      <section style={{ background: 'var(--surface-container-lowest)', borderTop: '1px solid var(--divider)', padding: 'clamp(64px, 12vw, 96px) 0' }}>
        <div style={{ ...brandsMaxW, padding: '0 clamp(20px, 5vw, 48px)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto 64px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: '0 0 20px' }}>
              Partner With Us
            </p>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-lg-size)', lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: 0 }}>
              If you're a brand and you're interested in working with us, contact us for our affiliate programs or brand partnerships!
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {boxes.map((b) => (
              <Card key={b.label} style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 32, minHeight: 200 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--primary)' }}>{b.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--on-surface)', margin: 0 }}>
                  {b.label}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto' }}>
                  {b.lines.map((l, i) => (
                    <span key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm-size)', color: i === 0 ? 'var(--on-surface)' : 'var(--on-surface-variant)' }}>{l}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function BrandsScreen({ brandsScale }) {
    return (
      <div>
        <BrandsHeader brandsScale={brandsScale} />
        <BrandWheel />
        <PartnershipContact />
      </div>
    );
  }

  // VENVM LINE — Product detail screen

  const maxWP = { maxWidth: 'var(--layout-max)', margin: '0 auto' };

  function Breadcrumb({ go, trail }) {
    return (
      <div style={{ ...maxWP, padding: '32px clamp(20px, 5vw, 48px) 16px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>
        {trail.map((t, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>}
            <span onClick={t.go ? () => go(t.go) : null} style={{ cursor: t.go ? 'pointer' : 'default', color: i === trail.length - 1 ? 'var(--on-surface)' : 'inherit' }}>{t.label}</span>
          </React.Fragment>
        ))}
      </div>
    );
  }

  function ProductScreen({ go, addToCart }) {
    const { isMobile } = useVP();
    const imgs = [window.VENVM_IMG.intake, window.VENVM_IMG.exhaust, window.VENVM_IMG.car, window.VENVM_IMG.intake];
    const [active, setActive] = React.useState(0);
    const [qty, setQty] = React.useState(1);

    const specs = [
      ['Material', '2x2 Twill Pre-preg Carbon Fiber'],
      ['Filter Type', 'Oiled Cotton Gauze, Washable'],
      ['MAF Housing', 'CNC 6061-T6 Aluminum, Anodized'],
      ['Power Gain', '+18 WHP / +14 WTQ (Baseline Dyno)'],
      ['Weight', '1.4 kg (OEM: 3.5 kg)'],
      ['Install Time', '45 min — Bolt-on, No Tune'],
      ['Emissions', 'CARB E.O. Pending (50-State Legal)'],
      ['Warranty', '2 Years / Unlimited Mileage'],
    ];
    const feats = [
      '2x2 Twill Pre-preg Carbon Fiber Construction',
      'High-flow Washable & Reusable Air Filter',
      'CNC-machined 6061 Aluminum MAF Housing',
      'Dyno-tested +18 WHP / +14 WTQ Gains',
      'Direct Bolt-on — No Cutting or Modification',
    ];

    return (
      <div>
        <Breadcrumb go={go} trail={[{ label: 'HOME', go: 'home' }, { label: 'SHOP', go: 'shop' }, { label: 'V-FLOW INTAKE' }]} />

        <section style={{ ...maxWP, padding: '0 clamp(20px, 5vw, 48px) 80px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80 }}>
          {/* Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Card padding={0} style={{ aspectRatio: '1', overflow: 'hidden' }}>
              <img src={imgs[active]} alt="V-FLOW INTAKE" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Card>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {imgs.map((src, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  aspectRatio: '1', background: 'var(--surface-container)', borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer', padding: 0,
                  border: '2px solid ' + (i === active ? 'var(--primary)' : 'var(--border-faint)'),
                  boxShadow: i === active ? 'var(--glow-blue-soft)' : 'none',
                  transition: 'all var(--dur-base) var(--ease-standard)',
                }}>
                  <img src={src} alt={'Thumbnail ' + (i + 1)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 8 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              <Tag tone="magenta">Race Spec</Tag>
              <Tag tone="neutral">New Arrival</Tag>
            </div>
            <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'clamp(34px, 7vw, 48px)', letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: '0 0 8px' }}>V-FLOW INTAKE</h1>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)', margin: '0 0 24px' }}>Carbon Fiber Cold Air Intake System</p>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
              <span className="text-glow-blue" style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 30, color: 'var(--primary)' }}>$1,850</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', color: 'var(--on-surface-variant)', textDecoration: 'line-through' }}>$2,100</span>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', color: 'var(--secondary)' }}>SAVE $250</span>
            </div>

            <div style={{ height: 1, background: 'var(--border-hairline)', marginBottom: 32 }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
              <SpecTile icon="speed" value="+18" label="WHP" />
              <SpecTile icon="scale" value="-2.1kg" label="Weight" />
              <SpecTile icon="verified" value="CARB" label="Legal" />
            </div>

            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface)', margin: '0 0 16px' }}>Key Features</h3>
            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {feats.map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)' }}>
                  <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 16 }}>check_circle</span>{f}
                </li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface)', margin: '0 0 16px' }}>Fitment</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {['BMW G80 M3', 'BMW G82 M4', 'BMW G87 M2', 'S58 Engine'].map((f) => (
                <Tag key={f} shape="fitment" tone="outline">{f}</Tag>
              ))}
            </div>

            <div style={{ height: 1, background: 'var(--border-hairline)', marginBottom: 32 }}></div>

            <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-faint)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <IconButton icon="remove" onClick={() => setQty((q) => Math.max(1, q - 1))} ariaLabel="Decrease" />
                <span style={{ minWidth: 48, textAlign: 'center', fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', color: 'var(--on-surface)' }}>{qty}</span>
                <IconButton icon="add" onClick={() => setQty((q) => q + 1)} ariaLabel="Increase" />
              </div>
              <Button variant="primary" icon="shopping_cart" fullWidth onClick={() => { addToCart(qty); go('cart'); }}>Add to Cart</Button>
            </div>

            <div style={{ display: 'flex', gap: 24 }}>
              {[['local_shipping', 'Free Shipping'], ['shield', '2-Year Warranty']].map(([ic, t]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--on-surface-variant)' }}>
                  <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 16 }}>{ic}</span>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.08em' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical data */}
        <section style={{ background: 'var(--surface-container-lowest)', padding: '80px 0' }}>
          <div style={{ ...maxWP, padding: '0 clamp(20px, 5vw, 48px)' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-xl-size)', letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: '0 0 8px' }}>TECHNICAL DATA</h2>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--primary)', margin: '0 0 48px' }}>Engineering Specifications</p>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 1, background: 'var(--border-hairline)' }}>
              {specs.map(([k, v]) => (
                <div key={k} style={{ background: 'var(--background)', padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--body-sm-size)', color: 'var(--on-surface)', textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // VENVM LINE — Cart screen

  const maxWC = { maxWidth: 'var(--layout-max)', margin: '0 auto' };
  const TAX_RATE = 0.09;

  function CartScreen({ go, items, setItems }) {
    const { isMobile } = useVP();
    const [promo, setPromo] = React.useState('');
    const [promoMsg, setPromoMsg] = React.useState(null);

    const changeQty = (id, delta) => setItems((cur) => cur.map((it) => it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it));
    const remove = (id) => setItems((cur) => cur.filter((it) => it.id !== id));

    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    const count = items.reduce((s, it) => s + it.qty, 0);
    const money = (n) => '$' + n.toLocaleString(undefined, { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });

    const applyPromo = () => {
      const c = promo.trim().toUpperCase();
      if (c === 'VENVM10') setPromoMsg({ ok: true, t: 'CODE APPLIED — 10% OFF' });
      else if (c) setPromoMsg({ ok: false, t: 'INVALID PROMO CODE' });
    };

    return (
      <div>
        <div style={{ ...maxWC, padding: '32px clamp(20px, 5vw, 48px) 16px', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>
          <span onClick={() => go('home')} style={{ cursor: 'pointer' }}>HOME</span>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
          <span style={{ color: 'var(--on-surface)' }}>CART</span>
        </div>

        <section style={{ ...maxWC, padding: '0 clamp(20px, 5vw, 48px) 32px', display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 48, letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: 0 }}>YOUR CART</h1>
          <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', letterSpacing: '0.1em', color: 'var(--on-surface-variant)' }}>{count} ITEM{count !== 1 ? 'S' : ''}</span>
        </section>

        <section style={{ ...maxWC, padding: '0 clamp(20px, 5vw, 48px) 80px', display: 'grid', gridTemplateColumns: (isMobile || items.length === 0) ? '1fr' : '2fr 1fr', gap: isMobile ? 32 : 48 }}>
          {/* Items */}
          <div>
            {items.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 0' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--outline)', marginBottom: 24 }}>shopping_cart</span>
                <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--headline-md-size)', color: 'var(--on-surface)', margin: '0 0 12px' }}>YOUR CART IS EMPTY</h3>
                <p style={{ fontSize: 'var(--body-md-size)', color: 'var(--on-surface-variant)', maxWidth: 380, marginBottom: 32 }}>Looks like you haven't added any performance parts yet.</p>
                <Button variant="primary" size="lg" icon="arrow_back" onClick={() => go('shop')}>Shop Now</Button>
              </div>
            ) : (
              <>
                <div style={{ display: isMobile ? 'none' : 'grid', gridTemplateColumns: '6fr 2fr 2fr 2fr', gap: 16, paddingBottom: 16, borderBottom: '1px solid var(--border-hairline)' }}>
                  {['PRODUCT', 'QTY', 'PRICE', 'TOTAL'].map((h, i) => (
                    <span key={h} style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.1em', color: 'var(--on-surface-variant)', textAlign: i === 0 ? 'left' : i === 1 ? 'center' : 'right' }}>{h}</span>
                  ))}
                </div>
                {items.map((it) => (
                  <div key={it.id} style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '6fr 2fr 2fr 2fr', gap: 16, alignItems: isMobile ? 'start' : 'center', padding: '24px 0', borderBottom: '1px solid var(--border-hairline)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                      <div style={{ width: 96, height: 96, flexShrink: 0, background: 'var(--surface-container)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                        <img src={window.VENVM_IMG[it.img]} alt={it.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--body-md-size)', color: 'var(--on-surface)', margin: '0 0 4px' }}>{it.name}</p>
                        <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.05em', color: 'var(--on-surface-variant)', margin: '0 0 8px' }}>{it.sub}</p>
                        <Tag shape="fitment" tone="outline" style={{ fontSize: 10, padding: '3px 9px' }}>{it.chip}</Tag>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: isMobile ? 'flex-start' : 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-faint)', borderRadius: 'var(--radius-md)' }}>
                        <IconButton icon="remove" size="sm" onClick={() => changeQty(it.id, -1)} ariaLabel="Decrease" />
                        <span style={{ minWidth: 28, textAlign: 'center', fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', color: 'var(--on-surface)' }}>{it.qty}</span>
                        <IconButton icon="add" size="sm" onClick={() => changeQty(it.id, 1)} ariaLabel="Increase" />
                      </div>
                    </div>
                    <span style={{ textAlign: isMobile ? 'left' : 'right', fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', color: 'var(--on-surface-variant)' }}>{money(it.price)}</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'space-between' : 'flex-end', gap: 12 }}>
                      <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--body-md-size)', color: 'var(--on-surface)' }}>{money(it.price * it.qty)}</span>
                      <IconButton icon="close" size="sm" onClick={() => remove(it.id)} ariaLabel="Remove" />
                    </div>
                  </div>
                ))}
                <div style={{ paddingTop: 24 }}>
                  <a onClick={() => go('home')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-headline)', fontSize: 'var(--label-md-size)', letterSpacing: 'var(--tracking-widest)', color: 'var(--on-surface-variant)', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>CONTINUE SHOPPING
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Summary */}
          {items.length > 0 && (
            <Card style={{ position: isMobile ? 'static' : 'sticky', top: 112, alignSelf: 'start' }}>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--label-md-size)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--on-surface)', margin: '0 0 24px' }}>Order Summary</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                {[['Subtotal', money(subtotal)], ['Shipping', 'FREE'], ['Tax (Est.)', money(tax)]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 'var(--body-sm-size)', color: 'var(--on-surface-variant)' }}>{k}</span>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-md-size)', color: v === 'FREE' ? 'var(--primary)' : 'var(--on-surface)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', border: '1px solid var(--border-faint)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: promoMsg ? 8 : 24 }}>
                <input value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="PROMO CODE" style={{ background: 'transparent', border: 'none', flex: 1, padding: '11px 14px', color: 'var(--on-surface)', fontFamily: 'var(--font-label)', fontSize: 12, letterSpacing: '0.1em', outline: 'none' }} />
                <button onClick={applyPromo} style={{ padding: '0 18px', background: 'var(--surface-container-high)', border: 'none', color: 'var(--on-surface)', fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.1em', cursor: 'pointer' }}>APPLY</button>
              </div>
              {promoMsg && <p style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.08em', margin: '0 0 24px', color: promoMsg.ok ? 'var(--primary)' : 'var(--error)' }}>{promoMsg.t}</p>}
              <div style={{ height: 1, background: 'var(--border-hairline)', marginBottom: 24 }}></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 'var(--body-md-size)', color: 'var(--on-surface)' }}>TOTAL</span>
                <span className="text-glow-blue" style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 24, color: 'var(--primary)' }}>{money(total)}</span>
              </div>
              <Button variant="primary" icon="lock" fullWidth onClick={() => alert('Checkout is not available in this demo.')}>Secure Checkout</Button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                {[['local_shipping', 'Free shipping on orders $500+'], ['shield', '2-year manufacturer warranty'], ['undo', '30-day hassle-free returns']].map(([ic, t]) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--on-surface-variant)' }}>
                    <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 16 }}>{ic}</span>
                    <span style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', letterSpacing: '0.05em' }}>{t}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </section>
      </div>
    );
  }

  // VENVM LINE — Sign In screen

  function SignInScreen() {
    const [show, setShow] = React.useState(false);
    return (
      <section style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 24px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-glow)', pointerEvents: 'none' }}></div>
        <div style={{ width: '100%', maxWidth: 420, position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="glass-panel carbon-texture" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: 'var(--radius-xl)', marginBottom: 24 }}>
              <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 30 }}>shield_person</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em', color: 'var(--on-surface)', margin: '0 0 12px' }}>
              SIGN <span className="text-glow-blue" style={{ color: 'var(--primary)' }}>IN</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--label-sm-size)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', color: 'var(--on-surface-variant)', margin: 0 }}>Access your VENVM LINE account</p>
          </div>

          <Card radius="xl" padding={32}>
            <div style={{ marginBottom: 24 }}>
              <Input label="Email Address" icon="mail" type="email" placeholder="driver@venvm.com" />
            </div>
            <div style={{ marginBottom: 32 }}>
              <Input label="Password" icon="lock" type={show ? 'text' : 'password'} placeholder="••••••••••"
                trailing={<IconButton icon={show ? 'visibility' : 'visibility_off'} size="sm" onClick={() => setShow((s) => !s)} ariaLabel="Toggle password" />} />
            </div>
            <Button variant="primary" icon="login" fullWidth onClick={() => alert('Sign-in is not available in this demo.')}>Sign In</Button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '24px 0' }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border-hairline)' }}></div>
              <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: 'var(--tracking-hero)', color: 'var(--on-surface-variant)' }}>OR</span>
              <div style={{ flex: 1, height: 1, background: 'var(--border-hairline)' }}></div>
            </div>
            <Button variant="ghost" size="sm" icon="person_add" fullWidth>Create New Account</Button>
          </Card>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32 }}>
            {[['lock', 'SSL Encrypted'], ['verified_user', 'Secure Login']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--on-surface-variant)', opacity: 0.6 }}>
                <span className="material-symbols-outlined fill" style={{ color: 'var(--primary)', fontSize: 14 }}>{ic}</span>
                <span style={{ fontFamily: 'var(--font-label)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // VENVM LINE — storefront app shell (click-through router)

  function RootApp(props) {
    const vp = useViewport();
    const brandsScale = Number(props.brandsScale) || 1.6;
    const getInTouchScale = Number(props.getInTouchScale) || 1;
    const [screen, setScreen] = React.useState('home');
    const [items, setItems] = React.useState(() => {
      try {
        const saved = window.localStorage.getItem('venvm_cart');
        if (saved) return JSON.parse(saved);
      } catch (e) { /* ignore */ }
      return []; // First-ever visit: empty cart.
    });

    // Persist cart across visits.
    React.useEffect(() => {
      try { window.localStorage.setItem('venvm_cart', JSON.stringify(items)); }
      catch (e) { /* ignore */ }
    }, [items]);

    const go = (s) => { setScreen(s); window.scrollTo(0, 0); };
    const cartCount = items.reduce((s, it) => s + it.qty, 0);

    const addToCart = (qty) => {
      setItems((cur) => {
        const exists = cur.find((it) => it.id === 'intake');
        if (exists) return cur.map((it) => it.id === 'intake' ? { ...it, qty: it.qty + qty } : it);
        return [...cur, { id: 'intake', name: 'V-FLOW INTAKE', sub: 'Carbon Fiber Cold Air Intake', chip: 'BMW S58', price: 1850, qty, img: 'intake' }];
      });
    };

    return (
      <ViewportCtx.Provider value={vp}>
        <div>
          <NavBar go={go} active={screen} cartCount={cartCount} />
          {screen === 'home' && <HomeScreen go={go} getInTouchScale={getInTouchScale} />}
          {screen === 'shop' && <ShopScreen go={go} />}
          {screen === 'about' && <AboutScreen getInTouchScale={getInTouchScale} />}
          {screen === 'support' && <SupportScreen getInTouchScale={getInTouchScale} />}
          {screen === 'brands' && <BrandsScreen brandsScale={brandsScale} />}
          {screen === 'product' && <ProductScreen go={go} addToCart={addToCart} />}
          {screen === 'cart' && <CartScreen go={go} items={items} setItems={setItems} />}
          {screen === 'account' && <SignInScreen />}
          <Footer />
        </div>
      </ViewportCtx.Provider>
    );
  }

  return RootApp;
}

/* ===================== exported entry ===================== */
function StorefrontApp(props) {
  const [ready, setReady] = React.useState(!!window.VENVMLINEDesignSystem_2d12f7);
  React.useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (window.VENVMLINEDesignSystem_2d12f7) { clearInterval(t); setReady(true); }
    }, 30);
    return () => clearInterval(t);
  }, [ready]);
  if (!ready) return null;
  if (!RootAppRef) RootAppRef = defineComponents();
  return React.createElement(RootAppRef, props);
}

if (typeof window !== 'undefined') { window.StorefrontApp = StorefrontApp; }
if (typeof module !== 'undefined' && module.exports) { try { module.exports = { StorefrontApp }; } catch (e) {} }
