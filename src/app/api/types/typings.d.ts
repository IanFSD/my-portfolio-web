interface SanityBody {
    _id:string;
    _createdAt:string;
    _updatedAt:string;
    _rev:string;
}

interface Image{
    _type:'image';
    asset:{
        _ref:string;
        _type:'reference';
    }
}

export interface Social extends SanityBody{
    title:string;
    _type:'social';
    url:string;
}

export interface PageInfo extends SanityBody{
    _type:'pageInfo';
    address:string;
    backgroundInfo:string;
    email:string;
    role:string;
    heroImage:string;
    name:string;
    phoneNumber:string;
    profilePic: Image;
}
export interface Technology extends SanityBody{
    _type:'skill';
    image:Image;
    tittle:string;
}
export interface Skill extends SanityBody{
    _type:'skill';
    image:Image;
    title:string;
}

export interface Project extends SanityBody{
    title:string;
    _type:'project';
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
}
export interface Experiences extends SanityBody{
    _type: 'experience';
    companyImage:Image;
    companyName:string;
    dateStarted:date;
    dateEnded:date;
    isCurrentlyWorkingThere:boolean;
    jobTitle:string;
    points:string[];
    technologies: Technology[];
}