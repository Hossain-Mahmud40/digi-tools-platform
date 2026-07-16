const FooterColumn = ({ links, title }) => {
  return (
    <div>
      <h3 className="text-base font-bold text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a className="text-sm text-slate-400 hover:text-white">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
