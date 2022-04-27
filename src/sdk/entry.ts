import * as contentstack from "contentstack";

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_CONTENTSTACK_API_KEY as string,
  delivery_token: process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN as string,
  environment: process.env.REACT_APP_CONTENTSTACK_ENVIRONMENT as string,
});

export const getEntry = (ctype: string) => {
  return new Promise((resolve, reject) => {
    const Query = Stack.ContentType(ctype).Query();
    Query.includeCount()
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result[0][0]);
        },
        (err) => {
          reject(err);
        }
      );
  });
};

export const getEntryByRef = (ctype: string, refFieldPath: string[]) => {
  return new Promise((resolve, reject) => {
    const Query = Stack.ContentType(ctype).Query();
    Query.includeReference([...refFieldPath])
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result[0][0]);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
