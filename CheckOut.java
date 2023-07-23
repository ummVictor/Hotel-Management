import javax.swing.*;
import java.awt.*;

public class CheckOut extends JFrame {

    CheckOut(){
        //
        JPanel panel = new JPanel();
        panel.setBounds(5, 5, 790, 390);
        panel.setBackground(new Color(3,45,48));
        panel.setLayout(null);
        add(panel);

        JLabel label = new JLabel("Check-Out");
        label.setBounds(100, 20, 100, 30);
        label.setFont(new Font ("Times New Roman", Font.PLAIN, 20));
        label.setForeground(Color.WHITE);
        panel.add(label);

        setLayout(null);
        setSize(800, 400);
        setLocation(500, 210);
        setVisible(true);

    }

    public static void main(String [] args){
        new CheckOut();

    }
}