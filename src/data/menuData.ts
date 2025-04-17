// src/data/menuData.ts

export interface MenuItem {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MenuItem[];
  tag?: string; // ví dụ "New", "Hot" v.v nếu muốn highlight
}

export const megaMenu: MegaMenuColumn[] = [
  {
    title: 'Main Pages',
    items: [
      { label: 'Home Page 1', href: '' },
      { label: 'Home Page 2', href: '' },
      { label: 'Home Page 3', href: '' },
      { label: 'Home Page 4', href: '' },
      { label: 'Home Page 5', href: '' },
      { label: 'Freelancing', href: '' },
      { label: 'Sign In / Sign Up', href: '' },
      { label: 'Search Job', href: '' },
      { label: 'Accordion', href: '' },
      { label: 'Tab Style', href: '' },
    ],
  },
  {
    title: 'For Candidate',
    items: [
      { label: 'Browse Jobs', href: '' },
      { label: 'Browse Companies', href: '' },
      { label: 'Create Resume', href: '' },
      { label: 'Resume Detail', href: '' },
      { label: 'Manage Jobs', href: '' },
      { label: 'Job Detail', href: '' },
      { label: 'Job In Grid', href: '' },
      { label: 'Candidate Profile', href: '' },
      { label: 'Manage Resume 2', href: '' },
      { label: 'Company Detail', href: '' },
    ],
  },
  {
    title: 'For Employer',
    items: [
      { label: 'Create Job', href: '' },
      { label: 'Create Company', href: '' },
      { label: 'Manage Company', href: '' },
      { label: 'Manage Candidate', href: '' },
      { label: 'Manage Employee', href: '' },
      { label: 'Browse Resume', href: '' },
      { label: 'New Search Job', href: '' },
      { label: 'Employer Profile', href: '' },
      { label: 'Manage Resume', href: '' },
      { label: 'New Job Detail', href: '' },
    ],
  },
  {
    title: 'Extra Pages',
    tag: 'New',
    items: [
      { label: 'Freelancer detail', href: '' },
      { label: 'New Apply Job', href: '' },
      { label: 'Payment Methode', href: '' },
      { label: 'New LogIn / SignUp', href: '/' },
      { label: 'Freelancing Jobs', href: '' },
      { label: 'Freelancers', href: '' },
      { label: 'Freelancers 2', href: '' },
      { label: 'Premium Candidate', href: '' },
    ],
  },
];
