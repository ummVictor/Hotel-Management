import javax.swing.*;
import java.awt.*;

public class CheckOut extends JFrame {

    CheckOut(){
        //create a panel
        JPanel panel = new JPanel();
        panel.setBounds(5, 5, 790, 390);
        panel.setBackground(new Color(3,45,48));
        panel.setLayout(null);
        add(panel);
        
        //create the checkout text
        JLabel label = new JLabel("Check-Out");
        label.setBounds(100, 20, 100, 30);
        label.setFont(new Font ("Times New Roman", Font.PLAIN, 20));
        label.setForeground(Color.WHITE);
        //label is displayed on the panel
        panel.add(label);


        //create the Customer ID text
        JLabel UserId = new JLabel("Customer ID");
        UserId.setBounds(30, 80, 100, 30);
        UserId.setFont(new Font ("Times New Roman", Font.PLAIN, 12));
        UserId.setForeground(Color.WHITE);
        //UserID is displayed on the panel
        panel.add(UserId);

        Choice Customer = new Choice();
        Customer.setBounds(30, 80, 100, 30)
        panel.add(Customer);


        setLayout(null);
        setSize(800, 400);
        setLocation(500, 210);
        setVisible(true);

    }

    public static void main(String [] args){
        new CheckOut();

    }
}