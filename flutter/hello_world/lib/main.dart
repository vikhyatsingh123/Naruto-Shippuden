import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Center(
            child: Text('Welcome to My App'),
          ),
        ),
        body: const Center(
          child: Text(
            'Hello Hactoberfest-2021',
            style: TextStyle(fontSize: 25),
          ),
        ),
      ),
    );
  } // This trailing comma makes auto-formatting nicer for build methods.

}
