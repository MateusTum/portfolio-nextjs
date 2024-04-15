interface navLinks {
    [key: string]: {
        title: string;
        href: string;
    };
}

const navLinks: any = {
    home: {
        title: 'Home',
        titulo: 'Início',
        href: '/#home',
    },
    about: {
        title: 'About me',
        titulo: 'Sobre mim',
        href: '/#about',
    },
    portfolio: {
        title: 'Portfolio',
        titulo: 'Portfólio',
        href: '/#portfolio',
    },
    contact: {
        title: 'Contact',
        titulo: 'Contato',
        href: '/#contact',
    }
}

export default navLinks;