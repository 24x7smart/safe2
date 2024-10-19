import { Building } from "./building.model";

// src/app/models/device.model.ts
export interface Device {
    device_id: number;
    build_id: number;
    device_code: string;
    status: string;
    step_id: number;
    valid_till: Date;
    alarm_on: boolean;
    device_fault: boolean;
    water_fault: boolean;
    building?: Building; // Optional, as it might be populated from the API
    zones: Zone[],
    tanks: Tank[],
    motors: Motor[],
    wlines: Waterline[]
}

// src/app/models/motor.model.ts
export interface Motor {
    motor_id: number;
    block_id: number; // Assuming block_id is the foreign key
    motor_type: string;
    floor_id: number;
    loc: string;
    descr: string;
    status: string;
}

// src/app/models/zone.model.ts
export interface Zone {
    zone_id: number;
    code: string;
    name: string;
    detectors: Detector[]
}

// src/app/models/water-line.model.ts
export interface Waterline {
    wline_id: number;
    block_id: number; // Assuming block_id is the foreign key
    motor_id: number; // Assuming motor_id is the foreign key
    min_press: number;
    current_press: number;
}

// src/app/models/tank.model.ts
export interface Tank {
    tank_id: number;
    device_id: number; // Assuming block_id is the foreign key
    tank_type: string;
    loc: string;
    capacity: number;
    height: number;
    level: number;
    fullness: number;
}

// src/app/models/detector.model.ts
export interface Detector {
    detect_id: number;
    zone_id: number; // Assuming zone_id is the foreign key
    floor_id: number; // Assuming floor_id is the foreign key
    code: string;
    type: string;
    status: string;
}
