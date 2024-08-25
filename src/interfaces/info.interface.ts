export interface Info {
  home: {
    title: string;
    name: string;
    charge: string;
    studies1: string;
    studies2: string;
    studies3: string;
    location: string;
  };
  me: {
    title: string;
    description0: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    description6: string;
  };
  projects: {
    title: string;
    respository: string;
  };
  otherprojects: {
    title: string;
  };
  skills: {
    title: string;
    items: Array<{
      name: string;
      image_file: string;
    }>;
  };
  contact: {
    title: string;
    emailCopied: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}
