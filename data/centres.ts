export interface Centre {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
}

export const centresData: Centre[] = [
  {
    id: "kol-1",
    name: "Salt Lake Centre",
    city: "Kolkata",
    state: "West Bengal",
    address: "Block AE, Sector 1, Salt Lake City, Kolkata - 700064",
    phone: "+91 98765 43210",
    email: "saltlake@mindmantraabacus.com",
  },
  {
    id: "kol-2",
    name: "Park Street Centre",
    city: "Kolkata",
    state: "West Bengal",
    address: "22, Park Street, Kolkata - 700016",
    phone: "+91 98765 43211",
    email: "parkstreet@mindmantraabacus.com",
  },
  {
    id: "del-1",
    name: "Dwarka Centre",
    city: "Delhi",
    state: "Delhi",
    address: "Sector 12, Dwarka, New Delhi - 110078",
    phone: "+91 98765 43212",
    email: "dwarka@mindmantraabacus.com",
  },
  {
    id: "mum-1",
    name: "Andheri Centre",
    city: "Mumbai",
    state: "Maharashtra",
    address: "Andheri West, Mumbai - 400053",
    phone: "+91 98765 43213",
    email: "andheri@mindmantraabacus.com",
  },
  {
    id: "blr-1",
    name: "Whitefield Centre",
    city: "Bangalore",
    state: "Karnataka",
    address: "ITPL Road, Whitefield, Bangalore - 560066",
    phone: "+91 98765 43214",
    email: "whitefield@mindmantraabacus.com",
  },
  {
    id: "hyd-1",
    name: "Hitech City Centre",
    city: "Hyderabad",
    state: "Telangana",
    address: "Madhapur, Hitech City, Hyderabad - 500081",
    phone: "+91 98765 43215",
    email: "hitechcity@mindmantraabacus.com",
  },
  {
    id: "che-1",
    name: "T Nagar Centre",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "T Nagar, Chennai - 600017",
    phone: "+91 98765 43216",
    email: "tnagar@mindmantraabacus.com",
  },
  {
    id: "pun-1",
    name: "Koregaon Park Centre",
    city: "Pune",
    state: "Maharashtra",
    address: "Koregaon Park, Pune - 411001",
    phone: "+91 98765 43217",
    email: "koregaonpark@mindmantraabacus.com",
  },
];

export const cities = [...new Set(centresData.map((c) => c.city))];
