// models.ts

export interface Contact {
    id: number;
    name: string;
    role: string;
    phone1: string;
    phone2: string;
    email: string;
  }
  
  export interface Block {
    id: number;
    name: string;
    height: number;
    occu: string;
    floors: Floor[];
  }
  
  export interface Floor {
    id: number;
    name: string;
    built_area: number;
    seq: number;
    occu: string;
    occu_load: number;
  }
  
  export interface Building {
    id: number;
    name: string;
    lat: number;
    lng: number;
    address: string;
    occu: string;
    firestation: string;
    noc: string;
    contacts: Contact[];
    blocks: Block[];
  }
  