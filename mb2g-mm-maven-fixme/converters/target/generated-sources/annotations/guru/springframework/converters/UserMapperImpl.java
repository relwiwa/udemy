package guru.springframework.converters;

import guru.springframework.domain.UserCommand;
import guru.springframework.entities.User;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2019-05-05T18:30:49+0200",
    comments = "version: 1.2.0.Final, compiler: javac, environment: Java 1.8.0_121 (Oracle Corporation)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public UserCommand userToUserCommand(User user) {
        if ( user == null ) {
            return null;
        }

        UserCommand userCommand = new UserCommand();

        userCommand.setFirstName( user.getFirstName() );
        userCommand.setLastName( user.getLastName() );
        userCommand.setEmail( user.getEmail() );

        return userCommand;
    }

    @Override
    public User userCommandToUser(UserCommand userCommand) {
        if ( userCommand == null ) {
            return null;
        }

        User user = new User();

        user.setFirstName( userCommand.getFirstName() );
        user.setLastName( userCommand.getLastName() );
        user.setEmail( userCommand.getEmail() );

        return user;
    }
}
