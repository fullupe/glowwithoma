type Base={
    _createdAt:string;
    _id:string;
    _rev:string;
    _type:string;
    _updatedAt:string
}

interface ServiveContent extends Base{
    body:Block[];
    title:string;
    mainImage?:image;

}


interface HealthContent extends Base{
    body:Block[];
    //title:string;
    mainImage?:Image;

}
interface TestimoniesContent extends Base{
    body:Block[];
    clientname:string;
    mainImage?:image;

}

//can also use same typing s for acadamy content
interface TeamContent extends Base{
    body:Block[];
    title:string;
    smallBody:Block[];
    mainImage?:Image;

}



interface Image{
    _type:"image";
    asset:Reference;

}
interface MainImage{
    _type:"image";
    asset:Reference;
}

interface Block{
    _key:string;
    type:"block";
    children:Span[];
    markDefs:any[];
    style:"normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}