interface navLinks {
    [key: string]: {
        title: string;
        href: string;
    };
}

const navLinks: any = {
    home: {
        title: 'Home',
        href: 'home',
    },
    about: {
        title: 'About',
        href: 'about',
    },
    portfolio: {
        title: 'Portfolio',
        href: 'portfolio',
    },
    contact: {
        title: 'Contact',
        href: 'contact',
    }
}

export default navLinks;