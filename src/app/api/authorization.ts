import { verify } from 'jsonwebtoken';
import { NextRequest } from 'next/server';

interface AuthZ {
  status: number;
  error?: string;
}

export const authorization = async (request: NextRequest): Promise<AuthZ> => {
  if (request === undefined) {
    return { status: 500, error: 'Internal Server Error' };
  }

  const reqAuthZ = request.headers.get('authorization');
  const token = reqAuthZ?.split(' ')[1];

  if (reqAuthZ === undefined || reqAuthZ?.split(' ')[0] !== 'Bearer' || token === undefined) {
    return { status: 401, error: 'unauthorization' };
  }

  try {
    await new Promise<void>((resolve, reject) => {
      const secretKey = process.env.JWT_SECRET_KEY as string;
      verify(token, secretKey, (err) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    return { status: 200 };
  } catch (error) {
    return { status: 401, error: error as string };
  }
};
