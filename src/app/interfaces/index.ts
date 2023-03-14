export interface LoginDTO {
    password: string;
    userName: string;
}

export interface BookSlot {
    id?: number,
    vid?: number,
    vcid?: number, 
    dose?: number,
    mobile?: number,
    date?: string,
    slot?: string,
    bookingStatus? : string,
    bookingid?: number
}

export interface Register {
    name?: string,
    gender?: string,
    mobile?: number,
    adrNumber?: string,
    dob?: string,
    age?: string,
    address?: string,
    city?: string, 
    state?: string,
    pincode?: number,
    password?: string
}
