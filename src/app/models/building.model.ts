// models.ts

export interface Contact {
    contact_id: number;
    name: string;
    role: string;
    phone1: string;
    phone2: string;
    email: string;
  }
  
  export interface Block {
    block_id: number;
    name: string;
    height: number;
    occu: string;
    floors: Floor[];
  }
  
  export interface Floor {
    floor_id: number;
    name: string;
    ftype: string;
    built_area: number;
    seq: number;
    occu: string;
    occu_load: number;
  }
  
  export interface Building {
    build_id: number;
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
  