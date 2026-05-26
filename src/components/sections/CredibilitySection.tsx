const items=['Performance-first','Responsive by default','Conversion-focused','Built for scale'];
export const CredibilitySection=()=> <section className='py-16'><div className='mx-auto grid max-w-7xl gap-3 px-4 md:grid-cols-4'>{items.map(i=><div key={i} className='rounded-xl border border-line bg-card p-4 text-sm text-muted'>{i}</div>)}</div></section>;
