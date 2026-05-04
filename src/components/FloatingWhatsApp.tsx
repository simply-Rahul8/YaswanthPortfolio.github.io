const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917569687249"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ backgroundColor: '#25D366' }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1DA851')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.464-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.65-1.39zm-2.91 7.748c-5.05 0-9.156-4.108-9.156-9.157 0-5.049 4.105-9.157 9.157-9.157 5.05 0 9.156 4.108 9.156 9.157-.001 5.049-4.107 9.157-9.157 9.157zm0-19.872c-5.9 0-10.715 4.815-10.715 10.715 0 1.873.487 3.717 1.417 5.345L4.785 27l5.95-1.95a10.74 10.74 0 0 0 5.467 1.494c5.9 0 10.717-4.815 10.717-10.717 0-2.86-1.118-5.547-3.146-7.575a10.626 10.626 0 0 0-7.572-3.142z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
