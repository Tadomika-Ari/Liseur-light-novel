from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.filechooser import FileChooserListView

class PDFReaderApp(App):
    def build(self):
        self.root = BoxLayout(orientation='vertical')

        self.file_chooser = FileChooserListView()
        self.root.add_widget(self.file_chooser)

        self.open_button = Button(text="Ouvrir PDF", on_press=self.open_pdf)
        self.root.add_widget(self.open_button)

        self.recent_files_label = Label(text="Fichiers récemment ouverts:")
        self.root.add_widget(self.recent_files_label)

        return self.root

    def open_pdf(self, instance):
        file_path = self.file_chooser.selection and self.file_chooser.selection[0] or None

        if file_path:
            self.display_file_info(file_path)

    def display_file_info(self, file_path):
        self.recent_files_label.text += f"\nNom du fichier: {file_path}"

if __name__ == '__main__':
    PDFReaderApp().run()
