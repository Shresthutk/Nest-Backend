import { Module } from '@nestjs/common';
import { ConfigService,ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { JwtStrategy }
import { UserSchema ,User} from 'src/schemas/user.schema';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            return {
              secret: config.get<string>('SECRET'),
              signOptions: {
                expiresIn: config.get<string | number>('EXP'),
              },
            };
          },
        }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [ PassportModule],
})
export class AuthModule {}
