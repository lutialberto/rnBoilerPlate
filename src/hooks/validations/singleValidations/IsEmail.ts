export default (email: string) => /[a-z0-9\.-]+@[a-z]+(\.[a-z]+)+/i.test(email);
