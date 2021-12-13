export default function ScopeOfWork(props) {
    const { businessName } = props;
    return (
      <div id="proposal-container">
        <h2 className="text-center mb-5">Scope of Work - {businessName}</h2>
  
        <div id="proposal">
          <img
            alt=""
            src="/logo-dark.png"
            width="180"
            className="d-inline-block align-top"
          />
        </div>
      </div>
    );
  }
  