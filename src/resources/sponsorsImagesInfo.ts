import cse from '../images/sponsors/cse-cst.webp';
import nokia from '../images/sponsors/nokia.webp';
import placeholder from '../images/sponsors/placeholder.webp';

export interface Sponsor {
    name: string;
    type: string;
    description: string;
    frontImage: string;
}

export const sponsorsInfo: Sponsor[] =  [
    {
        name: "Nokia",
        type: "sponsor type",
        description: "blalablablablabalb",
        frontImage: nokia
    },
    {
        name: "Communications Security Establishment (CSE) Canada",
        type: "sponsor type 2",
        description: "bababbababab 2",
        frontImage: cse
    },
    {
        name: "Sponsor us!",
        type: "",
        description: "PLEASEPLEASEPLEASEPLEASEPLASE",
        frontImage: placeholder
    },
]